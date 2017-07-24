import {AllowNull, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import StructureStatic from "./StructureStatic";

@Table
export default class StructureStaticSupport extends Model<StructureStaticSupport> {

    @PrimaryKey
    @ForeignKey(() => StructureStatic)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    readonly id_structure_static_support: number;

    @PrimaryKey
    @ForeignKey(() => StructureStatic)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    readonly id_structure_static_child: number;
}