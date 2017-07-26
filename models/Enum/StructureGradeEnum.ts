import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export default class StructureGradeEnum extends Model<StructureGradeEnum> {

    static readonly NOUPGRADE = 0;
    static readonly UPGRADE1 = 1;
    static readonly UPGRADE2 = 2;
    static readonly UPGRADE3 = 3;

    @PrimaryKey
    @Column
    readonly id_structure_grade_enum: number;

}