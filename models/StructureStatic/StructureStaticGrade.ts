import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import Resources from "../Resources";
import {default as StructureStaticGradeCost} from "./StructureStaticGradeCost";
import Rank from "../Rank";
import StructureStaticGradeWin from "./StructureStaticGradeWin";
import StructureGradeEnum from "../Enum/StructureGradeEnum";

@Table
export default class StructureStaticGrade extends Model<StructureStaticGrade> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    readonly id_structure_static_grade: number;

    @ForeignKey(() => StructureGradeEnum)
    @AllowNull(false)
    @Column
    readonly id_structure_grade_enum: number;

    @BelongsTo(() => StructureGradeEnum)
    readonly grade: StructureGradeEnum;

    @BelongsToMany(() => Resources, () => StructureStaticGradeCost)
    readonly costs: Resources[];

    @BelongsToMany(() => Resources, () => StructureStaticGradeWin)
    readonly win: Resources[];

    @ForeignKey(() => Rank)
    @AllowNull(false)
    @Column
    readonly id_rank_needed: number;

    @BelongsTo(() => Rank, 'id_rank_needed')
    readonly rank_needed: Rank;
}