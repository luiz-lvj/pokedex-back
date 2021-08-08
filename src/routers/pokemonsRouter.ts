import express, { Router } from "express";
import * as pokemonsController from "../controllers/pokemonsController";

const pokemonsRouter: Router = express.Router();

pokemonsRouter.get("", pokemonsController.getPokemons);

export default pokemonsRouter;