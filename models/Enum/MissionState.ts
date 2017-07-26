import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export default class MissionState extends Model<MissionState> {

    static readonly OPEN = 1;
    static readonly SUCCESS = 2;
    static readonly FAIL = 3;

    @PrimaryKey
    @Column
    readonly id_mission_state: number;

}