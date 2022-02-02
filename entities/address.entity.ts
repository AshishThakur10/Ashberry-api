import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class address {

  public constructor(init?: Partial<address>) {
    Object.assign(this, init);
  }

  @PrimaryGeneratedColumn()
  Id?: number;

  @Column()
  AddressLine: string;

  @Column()
  City: string;

  @Column()
  State: string;

  @Column()
  Countery: string;

  @Column()
  Zip: number;

  @Column()
  Landmark: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

}