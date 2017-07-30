import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

export enum ActionStateEnum {
    WAIT = 0,
    STARTED = 1,
    ENDED = 2,
    CANCELED = 3
}

@Table
export default class ActionState extends Model<ActionState> {

    @PrimaryKey
    @Column
    readonly id_action_state: number;

}