import {IUserRegistrationParams} from "../../routes/UserRegistration";
import User from "../../models/User";
import {ModelData, SequelizeRequest} from "./ModelData";
import {Transaction} from "sequelize";
import {ErrorCode, ErrorCoded} from "../ErrorCodes";
import Password from "../../models/Password";
import Bluebird = require("bluebird");

export interface URDataSet {
    hashedPassword?: string;

    [key: string]: any;
}

export default class UserRegistrationData extends ModelData<IUserRegistrationParams, URDataSet> {

    protected getAllSequelizeRequests(): SequelizeRequest<IUserRegistrationParams, URDataSet> {
        return {
            request: (t, params, data, next) => this.checkExistUsername(t, params, data, next),
            thenRequest: [
                {
                    request: (t, params, data, next) => this.checkExistEmail(t, params, data, next),
                    thenRequest: [
                        {
                            request: (t, params, data, next) => this.hashPassword(t, params, data, next),
                            thenRequest: [
                                {
                                    request: (t, params, data, next) => this.storePassword(t, params, data, next)
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }

    private checkExistUsername(t: Transaction, params: IUserRegistrationParams, data: URDataSet, next: () => Promise<any>): Bluebird<any> {

        return User.findOne<User>({
            where: {username: params.username},
            transaction: t
        }).then(result => {
            if (result) {
                throw new ErrorCoded(ErrorCode.User.USERNAME_EXIST);
            }

            return next();
        });
    }

    private checkExistEmail(t: Transaction, params: IUserRegistrationParams, data: URDataSet, next: () => Promise<any>): Bluebird<any> {

        return User.findOne<User>({
            where: {email: params.email},
            transaction: t
        }).then(result => {
            if (result) {
                throw new ErrorCoded(ErrorCode.User.EMAIL_EXIST);
            }

            return next();
        });
    }

    private hashPassword(t: Transaction, params: IUserRegistrationParams, data: URDataSet, next: () => Promise<any>): Promise<any> {

        return Password.hashPassword(params.password)
            .then(hashedPassword => {

                data.hashedPassword = hashedPassword;

                return next();
            });

    }

    private storePassword(t: Transaction, params: IUserRegistrationParams, data: URDataSet, next: () => Promise<any>): Bluebird<any> {

        if (!data.hashedPassword) {
            throw new ErrorCoded(ErrorCode.General.UNHANDLED);
        }

        return Password.create({
            hash: data.hashedPassword
        }, {
            transaction: t
        }).then(password => {

            data.password = password;

            return next();
        });

    }

}