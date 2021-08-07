import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Session from "./Session";
import Pokemon from "./Pokemon";

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;
    
    @Column()
    email: string;

    @OneToMany(() => Session, session => session.user)
    sessions: Session[];

    @ManyToMany(() => Pokemon, pokemon => pokemon.users)
    pokemons: Pokemon[];
}