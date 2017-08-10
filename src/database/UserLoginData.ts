import {IDataToken, ModelData, SequelizeRequest} from "./ModelData";
import {IUserLoginParams} from "../../routes/UserLogin";
import {Transaction} from "sequelize";
import User, {Payload} from "../../models/User";
import {ErrorCode, ErrorCoded} from "../ErrorCodes";
import Password from "../../models/Password";
import * as jwt from 'jsonwebtoken';
import Bluebird = require("bluebird");

export interface ULDataSet extends IDataToken {
    user?: User;
    token?: string;
}

export default class UserLoginData extends ModelData<IUserLoginParams, ULDataSet> {

    protected getAllSequelizeRequests(): SequelizeRequest<IUserLoginParams, ULDataSet> {
        return {
            request: [(t, params, data) => this.checkUsername(t, params, data)],
            thenRequest: {
                request: [(t, params, data) => this.checkPassword(t, params, data)],
                thenRequest: {
                    request: [(t, params, data) => this.generateToken(t, params, data)],
                }
            }
        };
    }

    private checkUsername(t: Transaction, params: IUserLoginParams, data: ULDataSet): Bluebird<void> {

        return User.findOne<User>({
            where: {username: params.username},
            include: [Password],
            transaction: t
        }).then(result => {
            if (!result) {
                throw new ErrorCoded(ErrorCode.User.USERNAME_WRONG);
            }

            data.user = result;
        });
    }

    private checkPassword(t: Transaction, params: IUserLoginParams, data: ULDataSet): Promise<void> {

        const plain = params.password;
        const hash = data.user.password.hash;

        return Password.checkPassword(plain, hash)
            .then(same => {
                if (!same) {
                    throw new ErrorCoded(ErrorCode.User.PASSWORD_WRONG);
                }
            });
    }

    private generateToken(t: Transaction, params: IUserLoginParams, data: ULDataSet): Promise<void> {

        return new Promise((resolve, reject) => {

            const payload: Payload = data.user.getPayload();

            jwt.sign(payload, ModelData.privateKey, {
                algorithm: ModelData.tokenAlgo,
                expiresIn: '7d'
            }, (err: Error, encoded: string) => {
                if (err) {
                    reject(new ErrorCoded(ErrorCode.General.UNHANDLED, err));
                    return;
                }

                data.token = encoded;

                resolve();
            });
        });

    }


}