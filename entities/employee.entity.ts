import { address } from './address.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class employee {

  public constructor(init?: Partial<employee>) {
    Object.assign(this, init);
  }

  @PrimaryGeneratedColumn()
  Id?: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  address_id: string;

  @Column()
  Email: string;

  @Column()
  active: boolean;

  @Column()
  employee_attendance: number;

  @Column()
  PhoneNumber: number;

  @Column()
  Photo: string;

  @OneToOne(() => address , address => address.Id)
  address: address;

}