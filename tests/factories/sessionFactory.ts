import { getRepository } from "typeorm";
import User from "../../src/entities/User";
import { v4 as uuid } from "uuid";
import Session from "../../src/entities/Session";

export async function createSession(user: User): Promise<Session>{
    const token = uuid();
    const userSession = await getRepository(Session).create({
        user: user,
        token: token
    });
    await getRepository(Session).save(userSession);
    return userSession;
}