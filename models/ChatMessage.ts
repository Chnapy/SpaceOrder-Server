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
import User from "./User";
import ChatChannel from "./Enum/ChatChannel";

@Table
export default class ChatMessage extends Model<ChatMessage> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    readonly id_chat_message: number;

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    readonly id_user_from: number;

    @BelongsTo(() => User)
    readonly user_from: User;

    @ForeignKey(() => ChatChannel)
    @AllowNull(false)
    @Column
    readonly id_chat_channel: number;

    @BelongsTo(() => ChatChannel)
    readonly chat_channel: number;

    @AllowNull(false)
    @Column
    readonly content: string;

    @ForeignKey(() => User)
    @AllowNull(true)
    @Column(DataType.BIGINT)
    readonly id_user_to: number;

    @BelongsTo(() => User)
    readonly user_to: User;

    @CreatedAt
    @AllowNull(false)
    @Column
    readonly date_creation: Date;
}