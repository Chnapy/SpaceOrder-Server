import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import User from "./User";
import UserMission from "./UserMission";
import MissionState from "./Enum/MissionState";

@Table
export default class Mission extends Model<Mission> {

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

}