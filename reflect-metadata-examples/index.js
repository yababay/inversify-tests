"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var decorators_1 = require("./decorators");
var Warrior = /** @class */ (function () {
    function Warrior(firstName, lastName) {
        _Warrior_firstName.set(this, void 0);
        _Warrior_lastName.set(this, void 0);
        __classPrivateFieldSet(this, _Warrior_firstName, firstName, "f");
        __classPrivateFieldSet(this, _Warrior_lastName, lastName, "f");
    }
    Warrior.prototype.setFirstName = function (name) {
        __classPrivateFieldSet(this, _Warrior_firstName, name, "f");
    };
    Warrior.prototype.setLastName = function (name) {
        __classPrivateFieldSet(this, _Warrior_lastName, name, "f");
    };
    Warrior.prototype.about = function () {
        return "".concat(__classPrivateFieldGet(this, _Warrior_firstName, "f"), " ").concat(__classPrivateFieldGet(this, _Warrior_lastName, "f"));
    };
    var _Warrior_firstName, _Warrior_lastName;
    _Warrior_firstName = new WeakMap(), _Warrior_lastName = new WeakMap();
    __decorate([
        __param(0, decorators_1.logParameter),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Warrior.prototype, "setFirstName", null);
    __decorate([
        __param(0, decorators_1.logParameter),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Warrior.prototype, "setLastName", null);
    __decorate([
        decorators_1.logMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Warrior.prototype, "about", null);
    Warrior = __decorate([
        __param(1, decorators_1.logParameter),
        __metadata("design:paramtypes", [String, String])
    ], Warrior);
    return Warrior;
}());
var warrior = new Warrior('Алёша', 'Попович');
warrior.setFirstName('Добрыня');
warrior.setLastName('Никитич');
warrior.about();
