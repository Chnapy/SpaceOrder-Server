import {IParamChecker, IReturn, IReturnFail, Route} from "../src/Route";
import User from "../models/User";
import Password from "../models/Password";
import {Sequelize} from "sequelize-typescript";
import UserRegistrationData from "../src/database/UserRegistrationData";
import {ErrorCoded} from "../src/ErrorCodes";
import isAlphanumeric = require("validator/lib/isAlphanumeric");
import isLength = require("validator/lib/isLength");
import isEmail = require("validator/lib/isEmail");
import Bluebird = require("bluebird");

export interface IUserRegistrationParams {
    username: string;
    password: string;
    email: string;
}

const paramChecker: IParamChecker = {
    username: {
        validators: [
            isAlphanumeric,
            (str: string) => isLength(str, User.USERNAME_LENGTH)
        ]
    },
    password: {
        validators: [
            isAlphanumeric,
            (str: string) => isLength(str, Password.PASSWORD_LENGTH)
        ]
    },
    email: {
        validators: [
            isEmail,
            (str: string) => isLength(str, User.EMAIL_LENGTH)
        ]
    }
};

interface IUserRegistrationReturn extends IReturn {
    users: string;
}

export default class UserRegistration extends Route<IUserRegistrationParams, IUserRegistrationReturn> {

    constructor(sequelize: Sequelize) {
        super('/user/registration', sequelize, paramChecker);
    }

    protected computeData(params: IUserRegistrationParams): Bluebird<IUserRegistrationReturn | IReturnFail> {

        const model = new UserRegistrationData(this.sequelize);

        return model.start(params)
            .then(succ => {
                console.log('SUCC', succ);

                return {
                    success: true,
                    users: 'success !'
                }
            })
            .catch((err: ErrorCoded) => {
                console.log('ERROR', err);

                return {
                    success: false,
                    errorCode: err.code
                };
            });
    }

}
