import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import StructureStaticSupport from "./StructureStaticSupport";
import StructureStaticGrade from "./StructureStaticGrade";
import StructureOrigin from "../Enum/StructureOrigin";

@Table
export default class StructureStatic extends Model<StructureStatic> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    readonly id_structure_static: number;

    @ForeignKey(() => StructureOrigin)
    @AllowNull(false)
    @Column
    readonly id_structure_origin: number;

    @BelongsTo(() => StructureOrigin)
    readonly origin: StructureOrigin;

    @AllowNull(false)
    @Column
    readonly showMap: boolean;

    @AllowNull(false)
    @Column
    readonly taken: boolean;

    @AllowNull(false)
    @Column
    readonly canBeAttack: boolean;

    @BelongsToMany(() => StructureStatic, () => StructureStaticSupport)
    readonly supports: StructureStatic[];

    @HasMany(() => StructureStaticGrade, 'id_structure_static')
    readonly grades: StructureStaticGrade[];
}