import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export default class ChatChannel extends Model<ChatChannel> {

    static readonly SUBOFFICER = 1;
    static readonly OFFICER2 = 2;
    static readonly OFFICER1 = 3;
    static readonly ADMIRAL = 4;
    static readonly LEADER = 5;

    static readonly PUBLIC = 6;
    static readonly FACTION = 7;

    @PrimaryKey
    @Column
    readonly id_chat_channel: number;

}