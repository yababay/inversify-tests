import { Container } from "inversify";
import { TYPES } from "../types";
import { Warrior, Weapon, ThrowableWeapon } from "../interfaces";
import { Ninja, Katana, Shuriken } from "./entities";

const military = new Container();
military.bind<Warrior>(TYPES.Warrior).to(Ninja);
military.bind<Weapon>(TYPES.Weapon).to(Katana);
military.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { military };

