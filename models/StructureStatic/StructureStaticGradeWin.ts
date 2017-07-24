import {AllowNull, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import Resources from "../Resources";
import StructureStaticGrade from "./StructureStaticGrade";

@Table
export default class StructureStaticGradeWin extends Model<StructureStaticGradeWin> {

    @PrimaryKey
    @ForeignKey(() => StructureStaticGrade)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    readonly id_structure_static_grade: number;

    @PrimaryKey
    @ForeignKey(() => Resources)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    readonly id_resources: number;
}