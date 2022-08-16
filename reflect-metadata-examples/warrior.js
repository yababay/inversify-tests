"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Warrior_name, _Warrior_age, _Warrior_secretWeapon, _Warrior_isRenamed;
Object.defineProperty(exports, "__esModule", { value: true });
class Warrior {
    constructor(name, age, secretWeapon, standartWeapon = "кинжал") {
        _Warrior_name.set(this, void 0);
        _Warrior_age.set(this, void 0);
        _Warrior_secretWeapon.set(this, void 0);
        _Warrior_isRenamed.set(this, false);
        __classPrivateFieldSet(this, _Warrior_name, name, "f");
        __classPrivateFieldSet(this, _Warrior_age, age, "f");
        __classPrivateFieldSet(this, _Warrior_secretWeapon, secretWeapon, "f");
        this.standartWeapon = standartWeapon;
    }
    get age() {
        const rest = __classPrivateFieldGet(this, _Warrior_age, "f") % 10;
        let postfix;
        switch (rest) {
            case 1:
                postfix = "год";
                break;
            case 2:
            case 3:
            case 4:
                postfix = "года";
                break;
            default:
                postfix = "лет";
        }
        return `${__classPrivateFieldGet(this, _Warrior_age, "f")} ${postfix}`;
    }
    get name() { return __classPrivateFieldGet(this, _Warrior_name, "f"); }
    set name(update) {
        __classPrivateFieldSet(this, _Warrior_isRenamed, true, "f");
        __classPrivateFieldSet(this, _Warrior_name, `${update}-сан`, "f");
    }
    get power() {
        return Math.round(__classPrivateFieldGet(this, _Warrior_age, "f") * (1 + Math.random()) * 100) / 100;
    }
    about() {
        const prefix = __classPrivateFieldGet(this, _Warrior_isRenamed, "f") ? "Теперь меня зовут" : "Меня зовут";
        return `${prefix} ${__classPrivateFieldGet(this, _Warrior_name, "f")}. Мне ${this.age}. У меня ${this.standartWeapon} и ${__classPrivateFieldGet(this, _Warrior_secretWeapon, "f")}. Моя сила сейчас - ${this.power}.`;
    }
}
_Warrior_name = new WeakMap(), _Warrior_age = new WeakMap(), _Warrior_secretWeapon = new WeakMap(), _Warrior_isRenamed = new WeakMap();
exports.default = Warrior;
