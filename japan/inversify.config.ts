import { Container } from "inversify";
import { TYPES } from "../types";
import { Warrior, Weapon, ThrowableWeapon } from "../interfaces";
import { Ninja, Katana, Shuriken } from "./entities";

const militaryContainer = new Container();
militaryContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
militaryContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
militaryContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { militaryContainer };

