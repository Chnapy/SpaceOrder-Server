import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export default class StructureState extends Model<StructureState> {

    static readonly NORMAL = 1;
    static readonly BUILD = 2;
    static readonly REPAIR = 3;
    static readonly UPGRADE = 4;
    static readonly DESTROYED = 5;

    @PrimaryKey
    @Column
    readonly id_structure_state: number;

}