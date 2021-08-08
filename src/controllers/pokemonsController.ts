import { Request, Response } from "express";
import * as pokemonService from "../services/pokemonService";

export async function getPokemons(req: Request, res: Response): Promise<Response>{
    try{
        const auth: string = req.headers.authorization;
        if(!auth){
            return res.sendStatus(400);
        }
        const token: string = auth.replace("Bearer ", "");
        const userId: number = await pokemonService.getUserId(token);
        if(userId < 0){
            return res.sendStatus(401);
        }
        const pokemons = await pokemonService.getMyPokemons(userId);
        res.status(200);
        return res.send(pokemons);
    } catch{
        return res.sendStatus(500);
    }
}