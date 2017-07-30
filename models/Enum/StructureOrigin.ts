import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

export enum StructureOriginEnum {

    NATURAL = 0,
    ARTIFICIAL = 1
}

@Table
export default class StructureOrigin extends Model<StructureOrigin> {

    @PrimaryKey
    @Column
    readonly id_structure_origin: number;

}