import {Column, Entity, PrimaryGeneratedColumn, PrimaryColumn} from "typeorm";

@Entity()
export class app_user_logins {

  @PrimaryColumn()
  Id: number;

  @Column()
  UserId: number;

  @Column({nullable: true})
  LoginProvider: string;

  @Column({nullable: true})
  ProviderKey: string;

  @Column({nullable: true})
  ProviderDisplayName: string;

}