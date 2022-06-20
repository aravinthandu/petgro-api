
import {
    Column,
    Entity,
    CreateDateColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('medicalRecords')
  export class MedicalRecordsEntity {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    petId: number;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    name: string;
  
    @Column()
    type: string;
  
    @Column()
    medicineName: string;
  
    @Column()
    date: Date;
  }