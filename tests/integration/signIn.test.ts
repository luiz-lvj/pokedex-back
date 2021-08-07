import supertest from "supertest";
import { getConnection } from "typeorm";
import app, { init } from "../../src/app";
import { createUserWithPassword } from "../factories/userFactory";
import { clearDatabase } from "../utils/database";

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

describe("POST sign-in", () => {
    it("returns 400 for wrong body", async () => {
        const body = {
            email: "test@test.com"
        }
        const request = await supertest(app).post("/sign-in").send(body);
        expect(request.status).toBe(400);
    });
    it("returns 400 for wrong email", async () => {
        const body = {
            email: "test",
            password: "123",
        }
        const request = await supertest(app).post("/sign-in").send(body);
        expect(request.status).toBe(400);
    });
    it("returns 401 for unknown email", async ()  => {
        const body = {
            email: "test@test.com",
            password: "123",
        }
        const request = await supertest(app).post("/sign-in").send(body);
        expect(request.status).toBe(401);
    });
    it("returns 401 for wrong password", async () => {
        const password = "123";
        const user = await createUserWithPassword(password);
        const body = {
            email: user.email,
            password: "456"
        }
        const request = await supertest(app).post("/sign-in").send(body);
        expect(request.status).toBe(401);
    });
    it("returns 200 for successfull login", async () => {
        const password = "test"
        const user = await createUserWithPassword(password);
        const body = {
            email: user.email,
            password
        }
        const request = await supertest(app).post("/sign-in").send(body);
        expect(request.status).toBe(200);
        expect(request.body).toHaveProperty('token');
    })
});