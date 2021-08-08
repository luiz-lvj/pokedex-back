import { Request, Response } from "express";
import * as pokemonService from "../services/pokemonService";
import Pokemon from "../entities/Pokemon";

export async function addPokemon(req: Request, res: Response): Promise<Response>{
    try{
        const auth: string = req.headers.authorization;
        if(!req.params.id || !auth){
            return res.sendStatus(400);
        }
        const pokemonId: number = parseInt(req.params.id);
        if(isNaN(pokemonId) || !(await pokemonService.isValidPokemonId(pokemonId))){
            return res.sendStatus(400);
        }
        const token: string = auth.replace("Bearer ", "");
        const userId: number = await pokemonService.getUserId(token);
        if(userId < 0){
            return res.sendStatus(401);
        }
        let myPokemonsIds: number[] = await pokemonService.getMyPokemonsIds(userId);
        myPokemonsIds = [...myPokemonsIds, pokemonId];
        const myPokemons: Pokemon[] = await pokemonService.getPokemonList(myPokemonsIds);
        await pokemonService.setMyPokemons(userId, myPokemons);
        return res.sendStatus(200);
    } catch(err){
        return res.sendStatus(500);
    }
}
export async function removePokemon(req: Request, res: Response): Promise<Response>{
    try{
        const auth: string = req.headers.authorization;
        if(!req.params.id || !auth){
            return res.sendStatus(400);
        }
        const pokemonId: number = parseInt(req.params.id);
        if(isNaN(pokemonId) || !(await pokemonService.isValidPokemonId(pokemonId))){
            return res.sendStatus(400);
        }
        const token: string = auth.replace("Bearer ", "");
        const userId: number = await pokemonService.getUserId(token);
        if(userId < 0){
            return res.sendStatus(401);
        }
        let myPokemonsIds: number[] = await pokemonService.getMyPokemonsIds(userId);
        myPokemonsIds = [...myPokemonsIds].filter(myPokemonId => {
            if(myPokemonId === pokemonId){
                return false;
            }
            return true;
        });
        const myPokemons: Pokemon[] = await pokemonService.getPokemonList(myPokemonsIds);
        await pokemonService.setMyPokemons(userId, myPokemons);
        return res.sendStatus(200);
    } catch{
        return res.sendStatus(500);
    }
}