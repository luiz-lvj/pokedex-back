import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity('sessions')
export default class Session{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: number;

    @ManyToOne(() => User, user => user.sessions)
    @JoinColumn({ name: 'userId' })
    user: User;

}