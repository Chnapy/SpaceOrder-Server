import {IDataToken, ModelData, SequelizeRequest} from "./ModelData";
import {IFactionCreateParams} from "../../routes/FactionCreate";
import {Transaction} from "sequelize";
import Faction from "../../models/Faction";
import {ErrorCode, ErrorCoded} from "../ErrorCodes";
import User from "../../models/User";
import {RankEnum} from "../../models/Enum/Rank";
import Bluebird = require("bluebird");

export interface FCDataSet extends IDataToken {
    user: User;
    faction: Faction;
}

export default class FactionCreateData extends ModelData<IFactionCreateParams, FCDataSet> {

    constructor(sequelize) {
        super(sequelize, true);
    }

    protected getAllSequelizeRequests(): SequelizeRequest<IFactionCreateParams, FCDataSet> {
        return {
            request: [(t, params, data) => this.checkUserCanCreate(t, params, data)],
            thenRequest: {
                request: [(t, params, data) => this.checkExistFaction(t, params, data)],
                thenRequest: {
                    request: [(t, params, data) => this.createFaction(t, params, data)],
                    thenRequest: {
                        request: [(t, params, data) => this.addFactionToUser(t, params, data)]
                    }
                }
            }
        };
    }

    private checkUserCanCreate(t: Transaction, params: IFactionCreateParams, data: FCDataSet): Bluebird<void> {

        return User.findOne<User>({
            where: {id_user: data.tokenPayload.id_user},
            transaction: t
        }).then(result => {
            if (result.id_faction) {
                throw new ErrorCoded(ErrorCode.Faction.USER_INFACTION);
            }

            data.user = result;

        });
    }

    private checkExistFaction(t: Transaction, params: IFactionCreateParams, data: FCDataSet): Bluebird<void> {

        return Faction.findOne<Faction>({
            where: {name: params.name},
            transaction: t
        }).then(result => {
            if (result) {
                throw new ErrorCoded(ErrorCode.Faction.FACTION_NAMEEXIST);
            }

        });
    }

    private createFaction(t: Transaction, params: IFactionCreateParams, data: FCDataSet): Bluebird<void> {

        return Faction.create<Faction>({
            name: params.name,
            slogan: params.slogan,
            color: params.color,
            nb_users_actu: 1
        }, {
            transaction: t
        }).then(result => {
            data.faction = result;
        });
    }

    private addFactionToUser(t: Transaction, params: IFactionCreateParams, data: FCDataSet): Bluebird<[number, User[]]> {

        return User.update<User>({
            id_faction: data.faction.id_faction,
            id_rank: RankEnum.LEADER
        }, {
            where: {id_user: data.user.id_user},
            transaction: t
        });
    }
}