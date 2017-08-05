import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    BelongsToMany,
    Column,
    CreatedAt,
    DataType,
    ForeignKey,
    IsEmail,
    Length,
    PrimaryKey,
    Table,
    UpdatedAt
} from "sequelize-typescript";
import Password from "./Password";
import Faction from "./Faction";
import Rank from "./Enum/Rank";
import Mission from "./Mission";
import UserMission from "./UserMission";
import Resources from "./Resources";
import {ModelSendable} from "../src/ModelSendable";

export interface Payload {
    id_user: number;
    username: string;
    id_password: number;
    date_register: Date;
    id_resources_actu: number;
    id_resources_total: number;
}

export interface UserSend {
    id_user: number;
    general: {
        username: string;
        email: string;
        id_rank: number;
        date_register: Date;
        date_last_activity: Date;
    };
    faction: Faction | null;
    hierarchy: {
        top: User | null,
        bottom?: User[];
    };
    resources: {
        actu: Resources;
        total: Resources;
    };
    missions: Mission[];
}

@Table
export default class User extends ModelSendable<User, UserSend> {

    static USERNAME_LENGTH = {min: 3, max: 16};
    static EMAIL_LENGTH = {min: 0, max: 128};

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    readonly id_user: number;

    @Length(User.USERNAME_LENGTH)
    @AllowNull(false)
    @Column
    readonly username: string;

    @ForeignKey(() => Password)
    @AllowNull(false)
    @Column
    readonly id_password: number;

    @BelongsTo(() => Password)
    readonly password: Password;

    @IsEmail
    @Length(User.EMAIL_LENGTH)
    @AllowNull(false)
    @Column
    email: string;

    @CreatedAt
    @AllowNull(false)
    @Column
    readonly date_register: Date;

    @UpdatedAt
    @AllowNull(false)
    @Column
    date_last_activity: Date;

    @ForeignKey(() => Faction)
    @AllowNull(true)
    @Column
    id_faction: number;

    @BelongsTo(() => Faction)
    faction: Faction;

    @ForeignKey(() => User)
    @AllowNull(true)
    @Column
    id_top: number;

    @BelongsTo(() => User, 'id_top')
    top: User;

    @ForeignKey(() => Rank)
    @AllowNull(true)
    @Column
    id_rank: number;

    @BelongsTo(() => Rank, 'id_rank')
    rank: number;

    @ForeignKey(() => Resources)
    @AllowNull(false)
    @Column
    id_resources_actu: number;

    @BelongsTo(() => Resources, 'id_resources_actu')
    resources_actu: Resources;

    @ForeignKey(() => Resources)
    @AllowNull(false)
    @Column
    id_resources_total: number;

    @BelongsTo(() => Resources, 'id_resources_total')
    resources_total: Resources;

    @BelongsToMany(() => Mission, () => UserMission)
    missions: Mission[];

    toSend(): UserSend {
        return {
            id_user: this.id_user,
            general: {
                username: this.username,
                email: this.email,
                id_rank: this.id_rank,
                date_register: this.date_register,
                date_last_activity: this.date_last_activity
            },
            faction: this.faction,
            hierarchy: {
                top: this.top,
            },
            resources: {
                actu: this.resources_actu,
                total: this.resources_total
            },
            missions: this.missions
        };
    }

    getPayload(): Payload {
        return {
            id_user: this.id_user,
            username: this.username,
            id_password: this.id_password,
            date_register: this.date_register,
            id_resources_actu: this.id_resources_actu,
            id_resources_total: this.id_resources_total
        };
    }

}