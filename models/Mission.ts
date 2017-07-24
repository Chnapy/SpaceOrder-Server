import {
    AllowNull, AutoIncrement, BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, PrimaryKey,
    Table
} from "sequelize-typescript";
import User from "./User";
import UserMission from "./UserMission";

export class MissionState {
    static readonly OPEN = 1;
    static readonly SUCCESS = 2;
    static readonly FAIL = 3;
}

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

    @AllowNull(false)
    @Column
    state: number;

    @ForeignKey(() => User)
    @AllowNull(true)
    @Column
    id_author: number;

    @BelongsTo(() => User)
    author: User;

    @BelongsToMany(() => User, () => UserMission)
    target: User[];

}