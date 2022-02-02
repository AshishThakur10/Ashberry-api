import { store } from './store.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class channels {

  public constructor(init?: Partial<channels>) {
    Object.assign(this, init);
  }

  @PrimaryGeneratedColumn()
  Id?: number;

  @Column()
  Name: string;

  @OneToOne(() => store, store => store.Id) // specify inverse side as a second parameter
  @JoinColumn()
  store: store

}