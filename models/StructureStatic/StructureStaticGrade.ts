import {
    AllowNull,
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    HasMany,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import Resources from "../Resources";
import {default as StructureStaticGradeCost} from "./StructureStaticGradeCost";
import Rank from "../Rank";
import StructureStaticGradeWin from "./StructureStaticGradeWin";
import StructureStatic from "./StructureStatic";

export class StructureGradeEnum {
    static readonly BUILD = 0;
    static readonly UPGRADE1 = 1;
    static readonly UPGRADE2 = 2;
    static readonly UPGRADE3 = 3;
}

@Table
export default class StructureStaticGrade extends Model<StructureStaticGrade> {

    @PrimaryKey
    @Column(DataType.INTEGER)
    readonly id_structure_static_grade: number;

    @AllowNull(false)
    @Column
    readonly grade: number;

    @BelongsToMany(() => Resources, () => StructureStaticGradeCost)
    readonly costs: Resources[];

    @BelongsToMany(() => Resources, () => StructureStaticGradeWin)
    readonly win: Resources[];

    @BelongsTo(() => Rank, 'id_rank_needed')
    readonly rank_needed: Rank;
}