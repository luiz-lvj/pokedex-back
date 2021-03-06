import { getRepository } from "typeorm";
import User from "../../src/entities/User";
import Session from "../../src/entities/Session";
import Pokemon from "../../src/entities/Pokemon";

export async function clearDatabase () {
  await getRepository(Pokemon).delete({});
  await getRepository(Session).delete({});
  await getRepository(User).delete({});
}
