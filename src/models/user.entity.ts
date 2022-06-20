
import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

// import { Role } from './role.enum';

@Entity('users')
export class UserDetailsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ nullable: true })
  imagePath: string;

  @Column({ nullable: true })
  age: number;


  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  state: string;


  @Column({ nullable: true })
  parentName: string;

  // @Column({ type: 'enum', enum: Role, default: Role.USER })
  // role: Role;
  @CreateDateColumn()
  createdAt: Date;

}