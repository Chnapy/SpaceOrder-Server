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
import Action from "./Action";
import User from "./User";
import Resources from "./Resources";

@Table
export default class ActionUserParticipant extends Model<ActionUserParticipant> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    readonly id_action_user_participant: number;

    @ForeignKey(() => Action)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    readonly id_action: number;

    @BelongsTo(() => Action)
    readonly action: Action;

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    readonly id_user: number;

    @BelongsTo(() => User)
    readonly user: User;

    @ForeignKey(() => Resources)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    readonly id_resources: number;

    @BelongsTo(() => Resources)
    readonly resources: Resources;

}