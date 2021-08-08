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
    const myPokemonsIds: number[] = await getMyPokemonsIds(userId);
    const pokemonsWithBool: PokemonBool[] = allPokemons.map(pokemon => {
        const inMyPokemons: boolean = myPokemonsIds.includes(pokemon.id);
        const newPokemon: PokemonBool = {...pokemon,
            inMyPokemons
        }
        return newPokemon;
    });
    return pokemonsWithBool;
}

export async function setMyPokemons(userId: number, pokemons: Pokemon[]): Promise<void>{
    const user = await getRepository(User).findOne({
        relations: ["pokemons"],
        where: {
            id: userId
        }
    });
    user.pokemons = pokemons;
    await getRepository(User).save(user);
}

export async function getPokemonList(pokemonsIds: number[]): Promise<Pokemon[]>{
    const pokemons = await Promise.all(pokemonsIds.map(async (pokemonId: number) => {
        const pokemon = await getRepository(Pokemon).findOne({
            where: {
                id: pokemonId
            }
        });
        return pokemon;
    }));
    return pokemons;
}

export async function isValidPokemonId(id: number): Promise<boolean>{
    const numPokemons: number = await getRepository(Pokemon).count({
        id: id
    });
    return numPokemons === 1;
}

export async function getMyPokemonsIds(userId: number): Promise<number[]>{
    const user = await getRepository(User).findOne({
        relations: ["pokemons"],
        where: {
            id: userId
        }
    });
    const myPokemonsIds: number[] = user.pokemons.map(pokemon => pokemon.id);
    return myPokemonsIds;
}
