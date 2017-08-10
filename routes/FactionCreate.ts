import {IParamChecker, IParamsToken, IReturn, IReturnFail, Route} from "../src/Route";
import {Sequelize} from "sequelize-typescript";
import FactionCreateData from "../src/database/FactionCreateData";
import {ErrorCoded} from "../src/ErrorCodes";
import Faction from "../models/Faction";
import Bluebird = require("bluebird");
import isLength = require("validator/lib/isLength");
import isHexColor = require("validator/lib/isHexColor");

export interface IFactionCreateParams extends IParamsToken {
    name: string;
    slogan: string;
    color: string;
}

const FCParamChecker: IParamChecker = {
    name: {
        validators: [
            (str: string) => isLength(str, Faction.NAME_LENGTH)
        ]
    },
    slogan: {
        validators: [
            (str: string) => isLength(str, Faction.SLOGAN_LENGTH)
        ]
    },
    color: {
        validators: [
            isHexColor,
            (str: string) => isLength(str, Faction.COLOR_LENGTH)
        ]
    }
};

interface IFactionCreateReturn extends IReturn {

}

export default class FactionCreate extends Route<IFactionCreateParams, IFactionCreateReturn> {

    constructor(sequelize: Sequelize) {
        super('/faction/create', sequelize, FCParamChecker);
    }

    protected computeData(params: IFactionCreateParams): Bluebird<IFactionCreateReturn | IReturnFail> {

        const model = new FactionCreateData(this.sequelize);

        return model.start(params)
            .then((data) => ({
                success: true,
                data: data.faction
            }))
            .catch((err: ErrorCoded) => {

                return {
                    success: false,
                    errorCode: err.code
                };
            });
    }

}