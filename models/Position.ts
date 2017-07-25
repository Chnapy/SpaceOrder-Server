import {AllowNull, AutoIncrement, Column, DataType, IsInt, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export default class Position extends Model<Position> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    readonly id_location: number;

    @IsInt
    @AllowNull(false)
    @Column
    readonly x: number;

    @IsInt
    @AllowNull(false)
    @Column
    readonly y: number;

}