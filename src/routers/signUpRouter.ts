import express, { Router } from "express";
import * as signUpController from "../controllers/signUpController";

const signUpRouter: Router = express.Router();

signUpRouter.post("", signUpController.signUp);

export default signUpRouter;