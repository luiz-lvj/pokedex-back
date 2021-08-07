import { Request, Response } from "express";
import * as userService from "../services/userService";

export async function signIn(req: Request, res: Response){
    try{
        if(!req.body.email || !req.body.password){
            return res.sendStatus(400);
        }
        const email: string = req.body.email;
        const password: string = req.body.password;
        if(!userService.isValidEmail(email)){
            return res.sendStatus(400);
        }
        if(!(await userService.isUsedEmail(email))){
            return res.sendStatus(401);
        }
        const [validLogin, token] = await userService.validLogin(email, password);
        if(!validLogin){
            return res.sendStatus(401);
        }
        const response = {
            token
        }
        res.status(200);
        return res.send(response);
    } catch{
        return res.sendStatus(500);
    }
}