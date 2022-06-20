
import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('petDetail')
export class PetDetailsEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  userId: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  petName: string;

  @Column()
  dateOfBirth: string;

  @Column()
  category: string;

  @Column()
  breed: string;

  @Column()
  gender: string;
}