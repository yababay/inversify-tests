import { Container } from "inversify";
import { TYPES } from "../types";
import { Warrior, Weapon, ThrowableWeapon } from "../interfaces";
import { Legioner, Sword, Dart } from "./entities";

const military = new Container();
military.bind<Warrior>(TYPES.Warrior).to(Legioner);
military.bind<Weapon>(TYPES.Weapon).to(Sword);
military.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Dart);

export { military };

