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
import Position from "./Position";
import Resources from "./Resources";
import User from "./User";

export class StructureState {
    static readonly NORMAL = 1;
    static readonly BUILD = 2;
    static readonly REPAIR = 3;
    static readonly UPGRADE = 4;
    static readonly DESTROYED = 5;
}

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

    @ForeignKey(() => Position)
    @AllowNull(false)
    @Column
    readonly id_location: number;

    @BelongsTo(() => Position)
    readonly location: Position;

    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Column
    grade: number;

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