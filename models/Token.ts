import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
    Unique
} from "sequelize-typescript";
import User from "./User";

@Table
export default class Token extends Model<Token> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    readonly id_token: number;

    @Unique
    @AllowNull(false)
    @Column(DataType.UUID)
    readonly token: string;

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    readonly id_user: number;

    @BelongsTo(() => User)
    readonly user: User;

}