import { channels } from './channels.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export enum Status {
  Active = 'Active',

}

@Entity()
export class store {

  public constructor(init?: Partial<store>) {
    Object.assign(this, init);
  }

  @PrimaryGeneratedColumn()
  Id?: number;

  @Column()
  Email: string;

  @Column()
  BranchName: string;

  @Column()
  BranchCode: number;

  @Column()
  BusinessName: string;

  @Column({enum: Status, default: Status.Active})
  Status: Status;

  @OneToOne(() => channels , channels => channels.Id)
  channels: channels;
}