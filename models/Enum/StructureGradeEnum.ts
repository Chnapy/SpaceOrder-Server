import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

export enum StructureGradeEnum_Enum {

    NOUPGRADE = 0,
    UPGRADE1 = 1,
    UPGRADE2 = 2,
    UPGRADE3 = 3
}

@Table
export default class StructureGradeEnum extends Model<StructureGradeEnum> {

    @PrimaryKey
    @Column
    readonly id_structure_grade_enum: number;

}