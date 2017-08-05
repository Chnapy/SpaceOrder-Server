import {AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import Mission from "./Mission";
import User from "./User";

@Table
export default class UserMission extends Model<UserMission> {

    @PrimaryKey
    @ForeignKey(() => Mission)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    readonly id_mission: number;

    @BelongsTo(() => Mission)
    mission: Mission;

    @PrimaryKey
    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    readonly id_user: number;

    @BelongsTo(() => User)
    user: User;

}