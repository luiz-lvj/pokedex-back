import supertest from "supertest";
import { getConnection } from "typeorm";
import app, { init } from "../../src/app";
import { createUser } from "../factories/userFactory";
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

describe("POST /sign-up", () => {
    it("returns 201 for valid creation", async () => {
        const body = {
            email: "test@test.com",
            password: "123",
            confirmPassword: "123"
        }
        const request = await supertest(app).post("/sign-up").send(body);
        expect(request.status).toBe(201);
    });
    it("returns 400 for wrong body", async () => {
        const body = {
            email: "test@test.com",
            password: "123",
        }
        const request = await supertest(app).post("/sign-up").send(body);
        expect(request.status).toBe(400);
    });
    it("returns 400 for wrong email", async () => {
        const body = {
            email: "test",
            password: "123",
            confirmPassword: "123"
        }
        const request = await supertest(app).post("/sign-up").send(body);
        expect(request.status).toBe(400);
    });
    it("returns 400 for incorrect password", async () => {
        const body = {
            email: "test@test.com",
            password: "123",
            confirmPassword: "456"
        }
        const request = await supertest(app).post("/sign-up").send(body);
        expect(request.status).toBe(400);
    });
    it("returns 409 for duplicated email", async () => {
        const user = await createUser();
        const body = {
            email: user.email,
            password: "123",
            confirmPassword: "123"
        }
        const request = await supertest(app).post("/sign-up").send(body);
        expect(request.status).toBe(409);
    });
});