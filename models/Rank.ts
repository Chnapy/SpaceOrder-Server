import {Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export default class Rank extends Model<Rank> {

    static readonly SUBOFFICER = 1;
    static readonly OFFICER2 = 2;
    static readonly OFFICER1 = 3;
    static readonly ADMIRAL = 4;
    static readonly LEADER = 5;

    @PrimaryKey
    @Column(DataType.INTEGER)
    readonly id_rank: number;

}