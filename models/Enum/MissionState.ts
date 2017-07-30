import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

export enum MissionStateEnum {
    OPEN = 1,
    SUCCESS = 2,
    FAIL = 3
}

@Table
export default class MissionState extends Model<MissionState> {

    @PrimaryKey
    @Column
    readonly id_mission_state: number;

}