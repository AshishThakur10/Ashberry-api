import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class camera {

  public constructor(init?: Partial<camera>) {
    Object.assign(this, init);
  }

  @PrimaryGeneratedColumn()
  Id?: number;

  @Column()
  Name: string;

  @Column()
  RTSPUrl: string;

  @Column()
  StonreId: number;

  @Column()
  HorizontalDepth: string;

  @Column()
  TCPConnection: number;

  @Column()
  Status: number;

  @Column()
  Width: number;

  @Column()
  Hight: number;

  @Column()
  FPS: number;
}