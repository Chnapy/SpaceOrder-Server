import {default as Rank, RankEnum} from "../../models/Enum/Rank";
import ActionType, {ActionTypeEnum} from "../../models/Enum/ActionType";
import ActionState, {ActionStateEnum} from "../../models/Enum/ActionState";
import ChatChannel, {ChatChannelEnum} from "../../models/Enum/ChatChannel";
import MissionState, {MissionStateEnum} from "../../models/Enum/MissionState";
import StructureGradeEnum, {StructureGradeEnum_Enum} from "../../models/Enum/StructureGradeEnum";
import {default as StructureOrigin, StructureOriginEnum} from "../../models/Enum/StructureOrigin";
import {Model} from "sequelize-typescript";
import {default as StructureState, StructureStateEnum} from "../../models/Enum/StructureState";
import Bluebird = require("bluebird");

export default class InitStaticData {

    static compute(transaction: any): Bluebird<Model<any>[]>[] {
        //Rank
        const getEnumValues = (modelEnum: Object) => Object.keys(modelEnum).filter(e => e === +e + '').map(e => +e);

        const options = {transaction: transaction};

        return [

            Rank.bulkCreate<Rank>(getEnumValues(RankEnum).map((k: number) => ({id_rank: k})), options),

            ActionType.bulkCreate<ActionType>(getEnumValues(ActionTypeEnum).map((k: number) => ({id_action_type: k})), options),

            ActionState.bulkCreate<ActionState>(getEnumValues(ActionStateEnum).map((k: number) => ({id_action_state: k})), options),

            ChatChannel.bulkCreate<ChatChannel>(getEnumValues(ChatChannelEnum).map((k: number) => ({id_chat_channel: k})), options),

            MissionState.bulkCreate<MissionState>(getEnumValues(MissionStateEnum).map((k: number) => ({id_mission_state: k})), options),

            StructureGradeEnum.bulkCreate<StructureGradeEnum>(getEnumValues(StructureGradeEnum_Enum).map((k: number) => ({id_structure_grade_enum: k})), options),

            StructureOrigin.bulkCreate<StructureOrigin>(getEnumValues(StructureOriginEnum).map((k: number) => ({id_structure_origin: k})), options),

            StructureState.bulkCreate<StructureState>(getEnumValues(StructureStateEnum).map((k: number) => {
                return ({id_structure_state: k});
            }), options)

        ];
    }

}