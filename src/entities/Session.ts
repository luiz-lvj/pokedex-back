import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity('userSessions')
export default class Session{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: string;

    @ManyToOne(() => User, user => user.userSessions)
    @JoinColumn({ name: 'userId' })
    user: User;
}