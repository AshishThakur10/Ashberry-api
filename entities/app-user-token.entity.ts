import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { app_user } from "./app-user.entity";

@Entity()
export class app_user_token {

  @PrimaryColumn()
  Id: number;

  @Column()
  UserId: number

  @Column({ default: "local" })
  LoginProvider: string;

  @Column({ default: "access-token" })
  Name: string;

  @Column()
  Value: string;

  @ManyToOne(type => app_user, user => user.Tokens)
  @JoinColumn({ name: "UserId" })
  User: app_user

}