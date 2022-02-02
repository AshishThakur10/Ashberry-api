import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn, OneToMany } from "typeorm";
import { app_user_token } from "./app-user-token.entity";

@Entity()
export class app_user {

  public constructor(init?: Partial<app_user>) {
    Object.assign(this, init);
  }

  @PrimaryGeneratedColumn()
  Id?: number;

  @Column()
  UserName: string;

  @Column()
  NormalizedUserName: string;

  @Column()
  Email: string;

  @Column()
  NormalizedEmail: string;

  @Column()
  EmailConfirmed: boolean;

  @Column()
  PasswordHash: string;

  @Column({ nullable: true })
  SecurityStamp?: string;

  @Column({ nullable: true })
  ConcurrencyStamp?: string;

  @Column({ nullable: true })
  PhoneNumber?: string;

  @Column({ nullable: true })
  PhoneNumberConfirmed?: boolean;

  @Column({ default: false })
  TwoFactorEnabled?: boolean;

  @Column({ type: "datetime", nullable: true })
  LockoutEnd?: string

  @Column({ nullable: true })
  LockoutEnabled?: boolean;

  @Column({ default: 0 })
  AccessFailedCount?: number;

  @Column({ nullable: true })
  Otp?: string;

  @Column({ nullable: true })
  IsOtpVerified?: boolean;

  @OneToMany(type => app_user_token, token => token.User)
  Tokens?: app_user_token[]

}