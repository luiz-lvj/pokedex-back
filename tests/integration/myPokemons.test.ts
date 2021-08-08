import supertest from "supertest";
import { getConnection } from "typeorm";
import app, { init } from "../../src/app";
import { createPokemon } from "../factories/pokemonFactory";
import { createSession } from "../factories/sessionFactory";
import { createUser } from "../factories/userFactory";
import { clearDatabase } from "../utils/database";
import User from "../../src/entities/User";
import Pokemon from "../../src/entities/Pokemon";
import Session from "../../src/entities/Session";

beforeAll(async () => {
    await init();
});

beforeEach(async () => {
    await clearDatabase();
});

afterAll(async () => {
    await clearDatabase();
    await getConnection().close();
});

describe("POST /my-pokemons/:id/add", () => {
    it("returns 400 for invalid url", async () => {
        const request = await supertest(app).post("/my-pokemons/any/add").send();
        expect(request.status).toBe(400);
    });
    it("returns 401 for token", async () => {
        const user = await createUser();
        const pokemon = await createPokemon(user);
        const request = await supertest(app).post(`/my-pokemons/${pokemon.id}/add`).set('Authorization', 'Bearer anything').send();
        expect(request.status).toBe(401);
    });
    it("returns 200 for valid add", async () => {
        const user1 = await createUser();
        const pokemon = await createPokemon(user1);
        const user2 = await createUser();
        const userSession = await createSession(user2);
        const request = await supertest(app).post(`/my-pokemons/${pokemon.id}/add`).set('Authorization', `Bearer ${userSession.token}`).send();
        expect(request.status).toBe(200);
    });
});

describe("POST /my-pokemons/:id/remove", () => {
    it("returns 400 for invalid url", async () => {
        const request = await supertest(app).post("/my-pokemons/any/remove").send();
        expect(request.status).toBe(400);
    });
    it("returns 401 for token", async () => {
        const user = await createUser();
        const pokemon = await createPokemon(user);
        const request = await supertest(app).post(`/my-pokemons/${pokemon.id}/remove`).set('Authorization', 'Bearer anything').send();
        expect(request.status).toBe(401);
    });
    it("returns 200 for valid remove", async () => {
        const user = await createUser();
        const pokemon = await createPokemon(user);
        const userSession = await createSession(user);
        const request = await supertest(app).post(`/my-pokemons/${pokemon.id}/remove`).set('Authorization', `Bearer ${userSession.token}`).send();
        expect(request.status).toBe(200);
    });
});