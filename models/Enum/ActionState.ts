import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export default class ActionState extends Model<ActionState> {

    static readonly WAIT = 0;
    static readonly STARTED = 1;
    static readonly ENDED = 2;
    static readonly CANCELED = 3;

    @PrimaryKey
    @Column
    readonly id_action_state: number;

}