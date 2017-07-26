import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export default class StructureOrigin extends Model<StructureOrigin> {

    static readonly NATURAL = 0;
    static readonly ARTIFICIAL = 1;

    @PrimaryKey
    @Column
    readonly id_structure_origin: number;

}