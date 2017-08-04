import {AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";
import * as bcrypt from 'bcrypt';

@Table
export default class Password extends Model<Password> {

    private static SALT_ROUNDS: number = 10;

    static PASSWORD_LENGTH = {min: 6, max: 32};

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    readonly id_password: number;

    @AllowNull(false)
    @Column
    hash: string;

    // @AllowNull(false)
    // @Column(DataType.ARRAY(DataType.INTEGER))
    // salt: Array<number>;

    static hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, Password.SALT_ROUNDS);
    }

    static checkPassword(plain, hash): Promise<boolean> {
        return bcrypt.compare(plain, hash);
    }

}