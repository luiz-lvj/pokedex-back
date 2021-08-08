import { getRepository } from "typeorm";
import Pokemon from "../../src/entities/Pokemon";
import User from "../../src/entities/User";

export async function createPokemon(user: User): Promise<Pokemon>{
    const pokemon = await getRepository(Pokemon).create({
        name: 'test',
        number: 1,
        image: "test",
        weight: 1,
        height: 1,
        baseExp: 1,
        description: "test",
        users: [user]
    });
    await getRepository(Pokemon).save(pokemon);
    return pokemon;
}