import {IDataToken, ModelData, SequelizeRequest} from "./ModelData";
import {Transaction} from "sequelize";
import {IUserLogoutParams} from "../../routes/UserLogout";

export interface ULODataSet extends IDataToken {
}

export default class UserLogoutData extends ModelData<IUserLogoutParams, ULODataSet> {

    constructor(sequelize) {
        super(sequelize, true);
    }

    protected getAllSequelizeRequests(): SequelizeRequest<IUserLogoutParams, ULODataSet> {
        return {
            request: [(t, params, data) => this.logout(t, params, data)],
        };
    }

    private logout(t: Transaction, params: IUserLogoutParams, data: ULODataSet): Promise<void> {

        return new Promise(resolve => resolve());
    }

}