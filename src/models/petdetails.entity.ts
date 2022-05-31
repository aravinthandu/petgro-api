
import {
    Column,
    Entity,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { UserDetailsEntity } from './user.entity';

@Entity('users')
export class PetDetailsEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @ManyToOne(type => UserDetailsEntity)
    @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
    user: UserDetailsEntity;

    @Column()
    petName: string;

    @Column()
    dateOB: string;

    @Column()
    age: number;

    @Column()
    category: string;

    @Column()
    breedName: string;

    @Column()
    gender: string;

    @Column()
    location: string;

    @CreateDateColumn()
    createdAt: Date;

}