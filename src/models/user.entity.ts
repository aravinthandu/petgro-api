
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity('userDetails')
  export class UserDetailsEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ default: '' })
    name: string;

    @Column({ default: '' })
    email: string;

    @Column({ default: '' })
    phone: string;

    @Column()
    isActive: boolean;

    @Column({ default: '' })
    accountId: string;
  
    @CreateDateColumn()
    createdAt: Date;

  }