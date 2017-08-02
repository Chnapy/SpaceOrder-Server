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
    Model,
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

@Table
export default class User extends Model<User> {

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

}
