import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    Column,
    CreatedAt,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import StructureStatic from "./StructureStatic/StructureStatic";
import Area from "./Area";
import Resources from "./Resources";
import User from "./User";
import StructureState from "./Enum/StructureState";
import StructureGradeEnum from "./Enum/StructureGradeEnum";

@Table
export default class Structure extends Model<Structure> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    readonly id_structure: number;

    @ForeignKey(() => StructureStatic)
    @AllowNull(false)
    @Column
    readonly id_structure_static: number;

    @BelongsTo(() => StructureStatic)
    readonly structure_static: StructureStatic;

    @ForeignKey(() => Area)
    @AllowNull(false)
    @Column
    readonly id_area: number;

    @BelongsTo(() => Area)
    readonly area: Area;

    @AllowNull(false)
    @Column
    name: string;

    @ForeignKey(() => StructureGradeEnum)
    @AllowNull(false)
    @Column
    id_structure_grade_enum: number;

    @BelongsTo(() => StructureGradeEnum)
    grade: StructureGradeEnum;

    @ForeignKey(() => StructureState)
    @AllowNull(false)
    @Column
    id_structure_state: number;

    @BelongsTo(() => StructureState)
    state: StructureState;

    @CreatedAt
    @AllowNull(false)
    @Column
    readonly date_creation: Date;

    @ForeignKey(() => Resources)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    readonly id_resources: number;

    @BelongsTo(() => Resources)
    readonly resources: Resources;

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    readonly id_owner: number;

    @BelongsTo(() => User)
    readonly owner: User;

    @ForeignKey(() => Structure)
    @AllowNull(true)
    @Column(DataType.BIGINT)
    readonly id_parent: number;

    @BelongsTo(() => Structure)
    readonly parent: Structure;
}