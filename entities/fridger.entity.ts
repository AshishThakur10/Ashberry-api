import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class fridger {

  public constructor(init?: Partial<fridger>) {
    Object.assign(this, init);
  }

  @PrimaryGeneratedColumn()
  Id?: number;

  @Column()
  StoreID: number;

  @Column()
  PinON: boolean;

  @Column()
  Name: string;

}