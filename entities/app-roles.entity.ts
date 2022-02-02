import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { app_user } from "./app-user.entity";

@Entity()
export class app_roles {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;


    @Column()
    NormalizedName: string;

    @Column({nullable: true})
    ConcurrencyStamp: string;

    @ManyToMany(type => app_user)
    @JoinTable()
    Users: app_user;

}