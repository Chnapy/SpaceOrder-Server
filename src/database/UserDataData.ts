import {IUserDataParams} from "../../routes/UserData";
import {IDataToken, ModelData, SequelizeRequest} from "./ModelData";
import {Transaction} from "sequelize";
import User, {UserSend} from "../../models/User";
import Faction from "../../models/Faction";
import {ErrorCode, ErrorCoded} from "../ErrorCodes";
import Resources from "../../models/Resources";
import Mission from "../../models/Mission";
import UserMission from "../../models/UserMission";
import Bluebird = require("bluebird");

export interface UDataSet extends IDataToken {
    users: UserSend[];
}

export default class UserDataData extends ModelData<IUserDataParams, UDataSet> {

    constructor(sequelize) {
        super(sequelize, true);
    }

    protected getAllSequelizeRequests(): SequelizeRequest<IUserDataParams, UDataSet> {
        return {
            request: [(t, params, data) => this.getUsers(t, params, data)],
            thenRequest: {
                request: [
                    (t, params, data) => this.getBottom(t, params, data),
                    (t, params, data) => this.getMissions(t, params, data)
                ]
            }
        };
    }

    private getUsers(t: Transaction, params: IUserDataParams, data: UDataSet): Bluebird<void> {

        data.users = [];

        return User.findAll<User>({
            include: [Faction, {model: Resources, as: 'resources_actu'}, {model: Resources, as: 'resources_total'}],
            where: {id_user: {'in': params.id_users}},
            transaction: t
        }).then(result => {
            if (result == null) {
                throw new ErrorCoded(ErrorCode.User.USERS_NOTFOUND);
            }

            data.users = result.map(u => u.toSend());
        });
    }

    private getBottom(t: Transaction, params: IUserDataParams, data: UDataSet): Promise<void[]> {

        return Promise.all(data.users.map(user => User.findAll<User>({
            where: {id_top: user.id_user},
            transaction: t
        }).then(result => {
            user.hierarchy.bottom = result;
        })));

    }

    private getMissions(t: Transaction, params: IUserDataParams, data: UDataSet): Promise<void[]> {

        return Promise.all(data.users.map(user => UserMission.findAll<Mission>({
            include: [Mission],
            where: {id_user: user.id_user},
            transaction: t
        }).then(result => {
            user.missions = result;
        })));

    }


}