import {Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";

export enum RankEnum {
    SUBOFFICER = 1,
    OFFICER2 = 2,
    OFFICER1 = 3,
    ADMIRAL = 4,
    LEADER = 5
}

@Table
export default class Rank extends Model<Rank> {

    @PrimaryKey
    @Column(DataType.INTEGER)
    readonly id_rank: number;

}