import {Sequelize} from "sequelize-typescript";

export abstract class ModelData {

    private transaction;

    constructor() {

    }

    public startTransaction(sequelize: Sequelize, callback: any) {

    }


}