import {IParamChecker, IParamsToken, IReturn, IReturnFail, Route} from "../src/Route";
import {Sequelize} from "sequelize-typescript";
import {ErrorCoded} from "../src/ErrorCodes";
import UserLogoutData from "../src/database/UserLogoutData";
import Bluebird = require("bluebird");

export interface IUserLogoutParams extends IParamsToken {
}

const ULOParamChecker: IParamChecker = {
    token: {
        validators: [
            // (str: string) => isLength(str, User.USERNAME_LENGTH)
        ]
    }
};

interface IUserLogoutReturn extends IReturn {
}

export default class UserLogout extends Route<IUserLogoutParams, IUserLogoutReturn> {

    constructor(sequelize: Sequelize) {
        super('/user/logout', sequelize, ULOParamChecker);
    }

    protected computeData(params: IUserLogoutParams): Bluebird<IUserLogoutReturn | IReturnFail> {

        const model = new UserLogoutData(this.sequelize);

        return model.start(params)
            .then((data) => ({
                success: true
            }))
            .catch((err: ErrorCoded) => {

                return {
                    success: false,
                    errorCode: err.code
                };
            });
    }

}
