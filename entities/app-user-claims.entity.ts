import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class app_user_claims {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    UserId: number;

    @Column("varchar", { length: 200 })
    ClaimType: string;

    @Column("varchar", { length: 300 })
    ClaimValue: string;

}