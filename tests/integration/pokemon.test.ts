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

describe("GET /pokemons", () => {
    it("returns 400 for no authorization", async () => {
        const request = await supertest(app).get("/pokemons").send();
        expect(request.status).toBe(400);
    });
    it("returns 401 for invalid token", async () => {
        const request = await supertest(app).get("/pokemons").set('Authorization', 'Bearer anything').send();
        expect(request.status).toBe(401);
    });
    it("returns 200 for valid token", async () => {
        const user: User = await createUser();
        const user2: User = await createUser();
        const pokemon1: Pokemon = await createPokemon(user);
        const pokemon2: Pokemon = await createPokemon(user);
        const pokemon3: Pokemon = await createPokemon(user2);
        const userSession: Session = await createSession(user);
        const request = await supertest(app).get("/pokemons").set('Authorization', `Bearer ${userSession.token}`).send();
        expect(request.status).toBe(200);
        expect(request.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: pokemon1.id,
                    name: pokemon1.name,
                    number: pokemon1.number,
                    image: pokemon1.image,
                    weight: pokemon1.weight,
                    height: pokemon1.height,
                    baseExp: pokemon1.baseExp,
                    description: pokemon1.description,
                    inMyPokemons: true
                }),
                expect.objectContaining({
                    id: pokemon2.id,
                    name: pokemon2.name,
                    number: pokemon2.number,
                    image: pokemon2.image,
                    weight: pokemon2.weight,
                    height: pokemon2.height,
                    baseExp: pokemon2.baseExp,
                    description: pokemon2.description,
                    inMyPokemons: true
                }),
                expect.objectContaining({
                    id: pokemon3.id,
                    name: pokemon3.name,
                    number: pokemon3.number,
                    image: pokemon3.image,
                    weight: pokemon3.weight,
                    height: pokemon3.height,
                    baseExp: pokemon3.baseExp,
                    description: pokemon3.description,
                    inMyPokemons: false
                })
            ])
        );
    })
});