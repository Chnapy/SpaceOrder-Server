import {AllowNull, AutoIncrement, Column, DataType, Default, IsInt, PrimaryKey, Table} from "sequelize-typescript";
import {ModelSendable} from "../src/ModelSendable";

export interface ResourcesSend {
    id_resources: number;
    mo: number;
    ma: number;
    mi: number;
    vit: number;
    d: number;
    life: number;
}

@Table
export default class Resources extends ModelSendable<Resources, ResourcesSend> {

    @PrimaryKey
    @AutoIncrement
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

    toSend(): ResourcesSend {
        return this.get();
    }
}