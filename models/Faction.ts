import {
    AllowNull, AutoIncrement, Column, CreatedAt, DataType, Default, Length, Model,
    PrimaryKey
} from "sequelize-typescript";

export default class Faction extends Model<Faction> {

    static readonly NAME_LENGTH = {
        min: 3,
        max: 16
    };
    static readonly SLOGAN_LENGTH = {
        min: 6,
        max: 64
    };
    static readonly COLOR_LENGTH = {min: 7, max: 7};

    static readonly NB_USERS_TOTAL = 341;

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    readonly id_faction: number;

    @Length(Faction.NAME_LENGTH)
    @AllowNull(false)
    @Column
    readonly name: string;

    @Length(Faction.SLOGAN_LENGTH)
    @AllowNull(false)
    @Column
    slogan: string;

    @Length(Faction.COLOR_LENGTH)
    @AllowNull(false)
    @Column
    color: string;

    @Default(0)
    @AllowNull(false)
    @Column
    nb_users_actu: number;

    @CreatedAt
    @AllowNull(false)
    @Column
    date_creation: Date;

}