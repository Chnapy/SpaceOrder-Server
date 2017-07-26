import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import Action from "../Action";
import Structure from "../Structure";
import StructureStatic from "../StructureStatic/StructureStatic";

@Table
export default class ActionBuild extends Model<ActionBuild> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    readonly id_action_build: number;

    @ForeignKey(() => Action)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    readonly id_action: number;

    @BelongsTo(() => Action)
    readonly action: Action;

    @ForeignKey(() => Structure)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    readonly id_structure: number;

    @BelongsTo(() => Structure)
    readonly support: Structure;

    @ForeignKey(() => StructureStatic)
    @AllowNull(false)
    @Column
    readonly id_structure_static: number;

    @BelongsTo(() => StructureStatic)
    readonly structure_static: StructureStatic;

}