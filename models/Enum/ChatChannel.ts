import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

export enum ChatChannelEnum {
    SUBOFFICER = 1,
    OFFICER2 = 2,
    OFFICER1 = 3,
    ADMIRAL = 4,
    LEADER = 5,

    PUBLIC = 6,
    FACTION = 7
}

@Table
export default class ChatChannel extends Model<ChatChannel> {

    @PrimaryKey
    @Column
    readonly id_chat_channel: number;

}