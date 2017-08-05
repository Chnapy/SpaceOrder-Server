import {IParamChecker, IParamsToken, IReturn, IReturnFail, Route} from "../src/Route";
import {Sequelize} from "sequelize-typescript";
import UserDataData from "../src/database/UserDataData";
import {ErrorCoded} from "../src/ErrorCodes";
import Bluebird = require("bluebird");
import isInt = require("validator/lib/isInt");

export interface IUserDataParams extends IParamsToken {
    id_users: number[];
}

const UParamChecker: IParamChecker = {
    id_users: {
        isArray: true,
        validators: [
            isInt
        ],
        formaters: [
            param => +param
        ]
    }
};

interface IUserDataReturn extends IReturn {
}

export default class UserData extends Route<IUserDataParams, IUserDataReturn> {

    constructor(sequelize: Sequelize) {
        super('/user/data', sequelize, UParamChecker);
    }

    protected computeData(params: IUserDataParams): Bluebird<IUserDataReturn | IReturnFail> {

        const model = new UserDataData(this.sequelize);

        return model.start(params)
            .then((data) => ({
                success: true,
                data: data.users
            }))
            .catch((err: ErrorCoded) => {

                return {
                    success: false,
                    errorCode: err.code
                };
            });
    }

}
