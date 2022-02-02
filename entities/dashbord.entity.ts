import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class dashbord {

  public constructor(init?: Partial<dashbord>) {
    Object.assign(this, init);
  }

  @PrimaryGeneratedColumn()
  Id?: number;

  @Column()
  FridgerID: string;

  @Column()
  Url: string;

  @Column()
  Name: number;

}