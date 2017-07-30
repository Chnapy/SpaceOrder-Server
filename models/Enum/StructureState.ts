import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

export enum StructureStateEnum {

    NORMAL = 1,
    BUILD = 2,
    REPAIR = 3,
    UPGRADE = 4,
    DESTROYED = 5
}

@Table
export default class StructureState extends Model<StructureState> {

    @PrimaryKey
    @Column
    readonly id_structure_state: number;

}