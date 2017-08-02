import {IUserRegistrationParams} from "../../routes/UserRegistration";
import User from "../../models/User";
import {ModelData, SequelizeRequest} from "./ModelData";
import {Transaction} from "sequelize";
import {ErrorCode, ErrorCoded} from "../ErrorCodes";
import Password from "../../models/Password";
import Resources from "../../models/Resources";
import Bluebird = require("bluebird");

export interface URDataSet {
    hashedPassword?: string;
    password?: Password;
    resources?: {
        actu?: Resources;
        total?: Resources;
    };
    user?: User;
}

export default class UserRegistrationData extends ModelData<IUserRegistrationParams, URDataSet> {

    private static getNewResources(t: Transaction, then: (resources: Resources) => void): Bluebird<any> {

        return Resources.create<Resources>({
            mo: 0,
            ma: 0,
            mi: 0
        }, {transaction: t})
            .then(then);
    }

    protected getAllSequelizeRequests(): SequelizeRequest<IUserRegistrationParams, URDataSet> {
        return {
            request: [(t, params, data) => this.checkExistUsername(t, params, data)],
            thenRequest: {
                request: [(t, params, data) => this.checkExistEmail(t, params, data)],
                thenRequest: {
                    request: [
                        (t, params, data) => this.hashPassword(t, params, data),
                        (t, params, data) => this.createResources(t, params, data)
                    ],
                    thenRequest: {
                        request: [(t, params, data) => this.storePassword(t, params, data)],
                        thenRequest: {
                            request: [(t, params, data) => this.createUser(t, params, data)]
                        }
                    }
                }
            }
        };
    }

    private checkExistUsername(t: Transaction, params: IUserRegistrationParams, data: URDataSet): Bluebird<any> {

        return User.findOne<User>({
            where: {username: params.username},
            transaction: t
        }).then(result => {
            if (result) {
                throw new ErrorCoded(ErrorCode.User.USERNAME_EXIST);
            }
        });
    }

    private checkExistEmail(t: Transaction, params: IUserRegistrationParams, data: URDataSet): Bluebird<any> {

        return User.findOne<User>({
            where: {email: params.email},
            transaction: t
        }).then(result => {
            if (result) {
                throw new ErrorCoded(ErrorCode.User.EMAIL_EXIST);
            }
        });
    }

    private hashPassword(t: Transaction, params: IUserRegistrationParams, data: URDataSet): Promise<any> {

        return Password.hashPassword(params.password)
            .then(hashedPassword => {

                data.hashedPassword = hashedPassword;
            });

    }

    private storePassword(t: Transaction, params: IUserRegistrationParams, data: URDataSet): Bluebird<any> {

        if (!data.hashedPassword) {
            throw new ErrorCoded(ErrorCode.General.UNHANDLED);
        }

        return Password.create<Password>({
            hash: data.hashedPassword
        }, {transaction: t})
            .then(password => {

                data.password = password;
            });

    }

    private createResources(t: Transaction, params: IUserRegistrationParams, data: URDataSet): Promise<any> {
        data.resources = {};

        return Promise.all([
            UserRegistrationData.getNewResources(t, resources => {
                data.resources.actu = resources;
            }),
            UserRegistrationData.getNewResources(t, resources => {
                data.resources.total = resources;
            })
        ]);

    }

    private createUser(t: Transaction, params: IUserRegistrationParams, data: URDataSet): Bluebird<any> {

        if (!data.password || !data.resources || !data.resources.actu || !data.resources.total) {
            throw new ErrorCoded(ErrorCode.General.UNHANDLED);
        }

        return User.create<User>({
            username: params.username,
            email: params.email,
            password: data.password,
            resources_actu: data.resources.actu,
            resources_total: data.resources.total
        }, {
            transaction: t,
            include: [{model: Password}]
        })
            .then(user => {
                data.user = user;
            });

    }

}