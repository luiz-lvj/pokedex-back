import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Session from "./Session";
import Pokemon from "./Pokemon";

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    hashPassword: string;

    @OneToMany(() => Session, session => session.user)
    userSessions: Session[];

    @ManyToMany(() => Pokemon, pokemon => pokemon.users)
    pokemons: Pokemon[];
}