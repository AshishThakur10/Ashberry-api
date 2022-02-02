import { employee as attandance } from './employee.entity';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class attendance {

  public constructor(init?: Partial<attandance>) {
    Object.assign(this, init);
  }

  @PrimaryGeneratedColumn()
  Id?: number;

  @Column()
  employee_id: string;

  @Column()
  SigninTime: string;

  @Column()
  SignoutTime: string;

  @Column()
  Verified: boolean;

}