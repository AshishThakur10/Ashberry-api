import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class app_role_claims {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    RoleId: number;

    @Column("varchar", { length: 200 })
    ClaimType: string;

    @Column("varchar", { length: 300 })
    ClaimValue: string;

}