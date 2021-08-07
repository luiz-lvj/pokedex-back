import { getRepository } from "typeorm";
import User from "../../src/entities/User";
import bcrypt from "bcrypt";

export async function createUser(): Promise<User>{
    const hashPassword: string = bcrypt.hashSync("123", 10);
    const user = await getRepository(User).create({
        email: "test@test.com",
        hashPassword
    });
    await getRepository(User).save(user);
    return user;
}