import { int } from "aws-sdk/clients/datapipeline";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class temp {

  public constructor(init?: Partial<temp>) {
    Object.assign(this, init);
  }

  @PrimaryGeneratedColumn()
  Id?: number;

  @Column()
  TimeStamp: string;

  @Column()
  Temprature: string;

  @Column()
  FridgeID: number;

}