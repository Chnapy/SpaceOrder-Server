import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import User from "./User";
import UserMission from "./UserMission";
import MissionState from "./Enum/MissionState";
import {ModelSendable} from "../src/ModelSendable";

export interface MissionSend {
    readonly id_mission: number;
    name: string;
    content: string;
    id_mission_state: number;
    author: User;
    target: User[];
}

@Table
export default class Mission extends ModelSendable<Mission, MissionSend> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    readonly id_mission: number;

    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Column(DataType.TEXT)
    content: string;

    @ForeignKey(() => MissionState)
    @AllowNull(false)
    @Column
    id_mission_state: number;

    @BelongsTo(() => MissionState)
    state: MissionState;

    @ForeignKey(() => User)
    @AllowNull(true)
    @Column(DataType.BIGINT)
    id_author: number;

    @BelongsTo(() => User)
    author: User;

    @BelongsToMany(() => User, () => UserMission)
    target: User[];

    toSend(): MissionSend {
        return {
            id_mission: this.id_mission,
            name: this.name,
            content: this.content,
            id_mission_state: this.id_mission_state,
            author: this.author,
            target: this.target
        }
    }

}