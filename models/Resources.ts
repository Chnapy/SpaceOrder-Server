import {AllowNull, Column, DataType, Default, IsInt, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export default class Resources extends Model<Resources> {

    @PrimaryKey
    @Column(DataType.BIGINT)
    readonly id_resources: number;

    @Default(0)
    @IsInt
    @AllowNull(false)
    @Column
    mo: number;

    @Default(0)
    @IsInt
    @AllowNull(false)
    @Column
    ma: number;

    @Default(0)
    @IsInt
    @AllowNull(false)
    @Column
    mi: number;

    @Default(0)
    @IsInt
    @AllowNull(false)
    @Column
    vit: number;

    @Default(0)
    @IsInt
    @AllowNull(false)
    @Column
    d: number;

    @Default(0)
    @IsInt
    @AllowNull(false)
    @Column
    life: number;
}