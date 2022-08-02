import { Container } from "inversify";
import { TYPES } from "../types";
import { Warrior, Weapon, ThrowableWeapon } from "../interfaces";
import { Bogatyr, Mace, Gantlet } from "./entities";

const military = new Container();
military.bind<Warrior>(TYPES.Warrior).to(Bogatyr);
military.bind<Weapon>(TYPES.Weapon).to(Mace);
military.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Gantlet);

export { military };

