import { getRepository } from "typeorm";
import User from "../entities/User";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import Session from "../entities/Session";

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

export async function validLogin(email: string, password: string): Promise<[boolean, string]>{
    try{
        const user: User = await getRepository(User).findOne({
            select: ["id", "hashPassword"],
            where: {
                email: email
            }
        });
        if(!bcrypt.compareSync(password, user.hashPassword)){
            return [false, ""];
        }
        const token = await generateToken(user);
        return [true, token];

    } catch{
        return [false, ""];
    }
}

export async function generateToken(user: User): Promise<string>{
    const token = uuid();
    const saveToken = await getRepository(Session).create({
        token,
        user
    });
    await getRepository(Session).save(saveToken);
    return token;
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