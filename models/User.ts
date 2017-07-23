import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    Column,
    CreatedAt,
    DataType,
    ForeignKey,
    IsEmail,
    IsInt,
    Length,
    Model,
    PrimaryKey,
    Scopes,
    Table,
    UpdatedAt
} from "sequelize-typescript";
import Password from "./Password";
import Faction from "./Faction";

@Scopes({
    full: {
        include: [
            {
                model: () => Password
            }
        ]
    }
})
@Table
export default class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    readonly id_user: number;

    @Length({min: 3, max: 16})
    @AllowNull(false)
    @Column
    readonly username: string;

    @ForeignKey(() => Password)
    // @AllowNull(false)
    @Column
    readonly id_password: number;

    @BelongsTo(() => Password)
    readonly password: Password;

    @IsEmail
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

    @BelongsTo(() => Faction)
    faction: Faction;

    @ForeignKey(() => Faction)
    @AllowNull(true)
    @Column
    id_faction: number;

    @ForeignKey(() => User)
    @Column
    id_top: number;

    @BelongsTo(() => User,
        {
            targetKey: 'id_user',
            as: 'top'
        })
    top: User;

    // @HasMany(() => User, 'id_user')
    // bottom: User[];

    @IsInt
    @AllowNull(false)
    @Column
    mo_actu: number;

    @IsInt
    @AllowNull(false)
    @Column
    mo_total: number;

    @IsInt
    @AllowNull(false)
    @Column
    ma_actu: number;

    @IsInt
    @AllowNull(false)
    @Column
    mi_actu: number;

    @IsInt
    @AllowNull(false)
    @Column
    mi_total: number;

    //missions

}
