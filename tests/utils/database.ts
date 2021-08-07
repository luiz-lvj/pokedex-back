import { getRepository } from "typeorm";


export async function clearDatabase () {
  await getRepository().delete({});
}
