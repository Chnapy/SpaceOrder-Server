import {AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export default class Password extends Model<Password> {

    static PASSWORD_LENGTH = {min: 6, max: 32};

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