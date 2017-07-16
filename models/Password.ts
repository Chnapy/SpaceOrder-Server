import {
    AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey,
    Table
} from "sequelize-typescript";
import User from "./User";

@Table
export default class Password extends Model<Password> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    readonly id_password: number;

    @AllowNull(false)
    @Column
    value: string;

    @AllowNull(false)
    @Column(DataType.ARRAY(DataType.INTEGER))
    salt: Array<number>;

}