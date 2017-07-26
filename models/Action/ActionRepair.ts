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
import Structure from "../Structure";
import Action from "../Action";

@Table
export default class ActionRepair extends Model<ActionRepair> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    readonly id_action_repair: number;

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
    readonly structure: Structure;

}