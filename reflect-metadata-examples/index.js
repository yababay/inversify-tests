"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const warrior_1 = require("./warrior");
const warrior = new warrior_1.default("Илья Муромец", 33, "палица");
console.log(warrior.about());
warrior.name = "Алёша Попович";
console.log(warrior.about());
// Исследование свойств
const props = [
    "#name",
    "#age",
    "standartWeapon",
    "#secretWeapon",
    "secretWeapon",
    "#isRenamed",
    "age",
    "name",
    "power",
    "about"
];
for (const prop of props.sort())
    console.log(`У воина есть ${prop}? ${Reflect.has(warrior, prop)}`);
console.log({
    ownKeys: Reflect.ownKeys(warrior),
    keys: Object.keys(warrior)
});
console.log({
    ownKeys: Reflect.ownKeys(warrior),
    keys: Object.keys(warrior)
});
console.log({
    ownProperty: Reflect.getOwnPropertyDescriptor(warrior, "standartWeapon"),
    objectProperty: Object.getOwnPropertyDescriptor(warrior, "standartWeapon")
});
console.log({
    ownProperty: Reflect.getOwnPropertyDescriptor(warrior, "age"),
    objectProperty: Object.getOwnPropertyDescriptor(warrior, "age")
});
console.log({
    ownProperty: Reflect.getOwnPropertyDescriptor(warrior, "#age"),
    objectProperty: Object.getOwnPropertyDescriptor(warrior, "#age")
});
console.log({
    ownProperty: Reflect.getOwnPropertyDescriptor(warrior, "secretWeapon"),
    objectProperty: Object.getOwnPropertyDescriptor(warrior, "secretWeapon")
});
console.log({
    reflectPrototype: Reflect.getPrototypeOf(warrior),
    objectPrototype: Object.getPrototypeOf(warrior),
    prototype: warrior_1.default.prototype
});
console.log('Стандартное оружие: ', Reflect.get(warrior, 'standartWeapon'));
warrior.standartWeapon = "кортик";
console.log('Стандартное оружие: ', Reflect.get(warrior, 'standartWeapon'));
// Управление свойствами (установка значения, удаление)
Reflect.set(warrior, 'standartWeapon', "шпага");
console.log('Стандартное оружие: ', Reflect.get(warrior, 'standartWeapon'));
const result = Reflect.deleteProperty(warrior, 'standartWeapon');
console.log(`Отобрать стандартное оружие${result ? ' ' : ' не '}удалось.`);
// warrior.hiddenWeapon = "стилет"; // так нельзя
// Управление метаданными.
console.log({
    ownMetadataKeys: Reflect.getOwnMetadataKeys(warrior),
    metadataKeys: Reflect.getMetadataKeys(warrior)
});
Reflect.defineMetadata('О воине', 'Это русский богатырь.', warrior);
console.log({
    ownMetadataKeys: Reflect.getOwnMetadataKeys(warrior),
    metadataKeys: Reflect.getMetadataKeys(warrior)
});
Reflect.defineMetadata('О стандартном оружии', 'Это оружие, которое есть у каждого воина.', warrior, 'standartWeapon');
console.log({
    propOwnMetadataKeys: Reflect.getOwnMetadataKeys(warrior, 'standartWeapon'),
    propMetadataKeys: Reflect.getMetadataKeys(warrior, 'standartWeapon')
});
console.log({
    hasMetadata: Reflect.hasMetadata('О воине', warrior),
    hasOwnMetadata: Reflect.hasOwnMetadata('О воине', warrior),
    propHasMetadata: Reflect.hasMetadata('О стандартном оружии', warrior, 'standartWeapon'),
    propHasOwnMetadata: Reflect.hasOwnMetadata('О стандартном оружии', warrior, 'standartWeapon'),
});
console.log({
    valueOfMetadata: Reflect.getMetadata('О воине', warrior),
    valueOfhasOwnMetadata: Reflect.getOwnMetadata('О воине', warrior),
    propValueOfMetadata: Reflect.getMetadata('О стандартном оружии', warrior, 'standartWeapon'),
    propValueOfOwnMetadata: Reflect.getOwnMetadata('О стандартном оружии', warrior, 'standartWeapon'),
});
function funny(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.standartWeapon = "пирожки с котятами";
        }
    };
}
let FunnyWarrior = class FunnyWarrior extends warrior_1.default {
};
FunnyWarrior = __decorate([
    funny
], FunnyWarrior);
const nikitich = new FunnyWarrior("Добрыня Никитич", 28, "винтовка Мосина");
console.log(nikitich.about());
