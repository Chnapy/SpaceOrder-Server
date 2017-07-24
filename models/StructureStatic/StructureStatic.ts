import {AllowNull, BelongsToMany, Column, DataType, HasMany, Model, PrimaryKey, Table} from "sequelize-typescript";
import StructureStaticSupport from "./StructureStaticSupport";
import StructureStaticGrade from "./StructureStaticGrade";

export class OriginEnum {
    static readonly NATURAL = 0;
    static readonly ARTIFICIAL = 1;
}

@Table
export default class StructureStatic extends Model<StructureStatic> {

    @PrimaryKey
    @Column(DataType.INTEGER)
    readonly id_structure_static: number;

    @AllowNull(false)
    @Column
    readonly origin: number;

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