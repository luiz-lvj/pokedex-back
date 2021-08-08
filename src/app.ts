import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";
import signUpRouter from "./routers/signUpRouter";
import signInRouter from "./routers/signInRouter";
import pokemonsRouter from "./routers/pokemonsRouter";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/sign-up", signUpRouter);
app.use("/sign-in", signInRouter);
app.use("/pokemons", pokemonsRouter);

export async function init () {
  await connectDatabase();
}

export default app;
