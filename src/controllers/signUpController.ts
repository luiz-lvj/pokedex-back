import { Request, Response } from "express";
import * as userService from "../services/userService";

export async function signUp(req: Request, res: Response): Promise<Response>{
    try{
        if(!req.body.email || !req.body.password || !req.body.confirmPassword){
            return res.sendStatus(400);
        }
        const email: string = req.body.email;
        const password: string = req.body.password;
        const confirmPassword: string = req.body.confirmPassword;
        if(!userService.isValidEmail(email)){
            return res.sendStatus(400);
        }
        if(password !== confirmPassword){
            return res.sendStatus(400);
        }
        if(await userService.isUsedEmail(email)){
            return res.sendStatus(409);
        }
        await userService.signUp(email, password);
        return res.sendStatus(201);
    } catch{
        return res.sendStatus(500);
    }
}