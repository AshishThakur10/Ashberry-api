import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class assemblyVarification {

  public constructor(init?: Partial<assemblyVarification>) {
    Object.assign(this, init);
  }

  @PrimaryGeneratedColumn()
  Id?: number;

  @Column()
  StoreID: number;

  @Column()
  OrderID: number;

  @Column()
  VarificationStatus: boolean;

  @Column()
  Result: string;

}