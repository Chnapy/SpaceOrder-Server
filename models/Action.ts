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
import Area from "./Area";
import Resources from "./Resources";
import ActionStatic from "./ActionStatic";
import User from "./User";
import ActionType from "./Enum/ActionType";
import ActionState from "./Enum/ActionState";

@Table
export default class Action extends Model<Action> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    readonly id_action: number;

    @ForeignKey(() => ActionStatic)
    @AllowNull(false)
    @Column
    readonly id_action_static: number;

    @BelongsTo(() => ActionStatic)
    readonly action_static: ActionStatic;

    @ForeignKey(() => Area)
    @AllowNull(false)
    @Column
    readonly id_area: number;

    @BelongsTo(() => Area)
    readonly area: Area;

    @ForeignKey(() => ActionType)
    @AllowNull(false)
    @Column
    readonly id_action_type: number;

    @BelongsTo(() => ActionType)
    readonly type: ActionType;

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    readonly id_user: number;

    @BelongsTo(() => User)
    readonly user: User;

    @CreatedAt
    @AllowNull(false)
    @Column
    readonly date_creation: Date;

    @AllowNull(false)
    @Column(DataType.DATE)
    readonly date_start: Date;

    @AllowNull(true)
    @Column(DataType.DATE)
    readonly date_end: Date;

    @ForeignKey(() => Resources)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    readonly id_resources: number;

    @BelongsTo(() => Resources)
    readonly resources_needed: Resources;

    @ForeignKey(() => ActionState)
    @AllowNull(false)
    @Column
    id_action_state: number;

    @BelongsTo(() => ActionState)
    state: ActionState;

}