import express, { Router } from "express";
import * as signInController from "../controllers/signInController";

const signInRouter: Router = express.Router();

signInRouter.post("", signInController.signIn);

export default signInRouter;