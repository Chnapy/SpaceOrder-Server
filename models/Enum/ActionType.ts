import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export default class ActionType extends Model<ActionType> {

    static readonly ALONE = 0;
    static readonly CALL = 1;

    @PrimaryKey
    @Column
    readonly id_action_type: number;

}