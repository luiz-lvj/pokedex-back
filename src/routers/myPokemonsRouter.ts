import express, { Router } from "express";
import * as myPokemonsController from "../controllers/myPokemonsController";

const myPokemonsRouter: Router = express.Router();

myPokemonsRouter.post("/:id/add", myPokemonsController.addPokemon);
myPokemonsRouter.post("/:id/remove", myPokemonsController.removePokemon);

export default myPokemonsRouter;