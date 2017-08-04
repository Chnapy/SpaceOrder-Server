import {IParamChecker, IReturn, IReturnFail, Route} from "../src/Route";
import {Sequelize} from "sequelize-typescript";
import {ErrorCoded} from "../src/ErrorCodes";
import {URParamChecker} from "./UserRegistration";
import UserLoginData from "../src/database/UserLoginData";
import Bluebird = require("bluebird");

export interface IUserLoginParams {
    username: string;
    password: string;
}

const ULParamChecker: IParamChecker = {
    username: URParamChecker.username,
    password: URParamChecker.password
};

interface IUserLoginReturn extends IReturn {
    token: string;
}

export default class UserLogin extends Route<IUserLoginParams, IUserLoginReturn> {

    constructor(sequelize: Sequelize) {
        super('/user/login', sequelize, ULParamChecker);
    }

    protected computeData(params: IUserLoginParams): Bluebird<IUserLoginReturn | IReturnFail> {

        const model = new UserLoginData(this.sequelize);

        return model.start(params)
            .then((data) => ({
                success: true,
                token: data.token
            }))
            .catch((err: ErrorCoded) => {
                console.log('ERROR', err);

                return {
                    success: false,
                    errorCode: err.code
                };
            });
    }

}
