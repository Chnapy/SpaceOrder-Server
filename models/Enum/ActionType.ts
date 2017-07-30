import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

export enum ActionTypeEnum {
    ALONE = 0,
    CALL = 1
}

@Table
export default class ActionType extends Model<ActionType> {

    static readonly ALONE = 0;
    static readonly CALL = 1;

    @PrimaryKey
    @Column
    readonly id_action_type: number;

}