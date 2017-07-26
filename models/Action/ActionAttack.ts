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

@Table
export default class ActionAttack extends Model<ActionAttack> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    readonly id_action_attack: number;

    @ForeignKey(() => Action)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    readonly id_action: number;

    @BelongsTo(() => Action)
    readonly action: Action;

}