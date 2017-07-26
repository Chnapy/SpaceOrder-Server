import {AllowNull, AutoIncrement, Column, DataType, IsInt, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export default class Area extends Model<Area> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    readonly id_area: number;

    @IsInt
    @AllowNull(false)
    @Column
    readonly x: number;

    @IsInt
    @AllowNull(false)
    @Column
    readonly y: number;

}