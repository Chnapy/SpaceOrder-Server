import {AutoIncrement, Column, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export default class ActionStatic extends Model<ActionStatic> {

    @PrimaryKey
    @AutoIncrement
    @Column
    readonly id_action_static: number;

}