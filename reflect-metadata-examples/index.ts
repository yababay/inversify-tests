import 'reflect-metadata';
import Warrior from './warrior';

const warrior = new Warrior("Илья Муромец", 33, "палица");
console.log(warrior.about())

warrior.name = "Алёша Попович"
console.log(warrior.about())

/*
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
]

for(const prop of props.sort()) console.log(`У воина есть ${prop}? ${Reflect.has(warrior, prop)}`)

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
    prototype: Warrior.prototype
});

console.log('Стандартное оружие: ', Reflect.get(warrior, 'standartWeapon'));

warrior.standartWeapon = "кортик";
console.log('Стандартное оружие: ', Reflect.get(warrior, 'standartWeapon'));

// Управление свойствами (установка значения, удаление)

Reflect.set(warrior, 'standartWeapon', "шпага");
console.log('Стандартное оружие: ', Reflect.get(warrior, 'standartWeapon'));

const result: boolean = Reflect.deleteProperty(warrior, 'standartWeapon')
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

Reflect.defineMetadata('О стандартном оружии', 'Это оружие, которое есть у каждого воина.',
        warrior, 'standartWeapon');

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

function funny<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        standartWeapon = "пирожки с котятами";
    }
}

@funny
class FunnyWarrior extends Warrior {}

const nikitich = new FunnyWarrior("Добрыня Никитич", 28, "винтовка Мосина");

console.log(nikitich.about())
*/
