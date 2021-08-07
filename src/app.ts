import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";
import signUpRouter from "./routers/signUpRouter";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/sign-up", signUpRouter);

export async function init () {
  await connectDatabase();
}

export default app;
