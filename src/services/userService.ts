import { getRepository } from "typeorm";
import User from "../entities/User";
import bcrypt from "bcrypt";

export async function signUp(email: string, password: string): Promise<void>{
    try{
        const hashPassword: string = bcrypt.hashSync(password, 10);
        const user = await getRepository(User).create({
            email,
            hashPassword
        });
        await getRepository(User).save(user);
    } catch{
        return;
    }
}

export async function isUsedEmail(email: string): Promise<boolean>{
    const numEmail: number = await getRepository(User).count({
        email
    });
    return numEmail > 0; 
}

export function isValidEmail(email: string): boolean{
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email.toLowerCase());
}