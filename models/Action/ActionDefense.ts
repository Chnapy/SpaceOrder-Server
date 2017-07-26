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
export default class ActionDefense extends Model<ActionDefense> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    readonly id_action_defense: number;

    @ForeignKey(() => Action)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    readonly id_action: number;

    @BelongsTo(() => Action)
    readonly action: Action;

}