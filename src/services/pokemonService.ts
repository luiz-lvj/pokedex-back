import { getRepository } from "typeorm";
import Session from "../entities/Session";
import Pokemon from "../entities/Pokemon";
import User from "../entities/User";

interface PokemonBool{
    id: number,
    name: string,
    number: number,
    image: string,
    weight: number,
    height: number,
    baseExp: number,
    description: string,
    inMyPokemons: boolean
}

export async function getUserId(token:string): Promise<number>{
    const userSession = await getRepository(Session).findOne({
        relations: ["user"],
        where: {
            token: token
        }
    });
    if(!userSession){
        return -1;
    }
    return userSession.user.id;
}

export async function getPokemons(): Promise<Pokemon[]>{
    const pokemons = await getRepository(Pokemon).find({
        select: ["id", "name", "number", "image", "weight", "height", "baseExp", "description"]
    });
    return pokemons;
}

export async function getMyPokemons(userId: number): Promise<PokemonBool[]>{
    const allPokemons: Pokemon[] = await getPokemons();
    const user = await getRepository(User).findOne({
        relations: ["pokemons"],
        where: {
            id: userId
        }
    });
    const myPokemonsIds: number[] = user.pokemons.map(pokemon => pokemon.id);
    const pokemonsWithBool: PokemonBool[] = allPokemons.map(pokemon => {
        const inMyPokemons: boolean = myPokemonsIds.includes(pokemon.id);
        const newPokemon: PokemonBool = {...pokemon,
            inMyPokemons
        }
        return newPokemon;
    });
    return pokemonsWithBool;
}
