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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gantlet = exports.Mace = exports.Bogatyr = void 0;
var inversify_1 = require("inversify");
require("reflect-metadata");
var types_1 = require("../types");
var Mace = /** @class */ (function () {
    function Mace() {
    }
    Mace.prototype.hit = function () {
        return "шмяк!";
    };
    Mace = __decorate([
        (0, inversify_1.injectable)()
    ], Mace);
    return Mace;
}());
exports.Mace = Mace;
var Gantlet = /** @class */ (function () {
    function Gantlet() {
    }
    Gantlet.prototype.throw = function () {
        return "тыдыщ!";
    };
    Gantlet = __decorate([
        (0, inversify_1.injectable)()
    ], Gantlet);
    return Gantlet;
}());
exports.Gantlet = Gantlet;
var Bogatyr = /** @class */ (function () {
    function Bogatyr(mace, gantlet) {
        this._mace = mace;
        this._gantlet = gantlet;
    }
    Bogatyr.prototype.fight = function () { return this._mace.hit(); };
    Bogatyr.prototype.sneak = function () { return this._gantlet.throw(); };
    Bogatyr = __decorate([
        (0, inversify_1.injectable)(),
        __param(0, (0, inversify_1.inject)(types_1.TYPES.Weapon)),
        __param(1, (0, inversify_1.inject)(types_1.TYPES.ThrowableWeapon)),
        __metadata("design:paramtypes", [Object, Object])
    ], Bogatyr);
    return Bogatyr;
}());
exports.Bogatyr = Bogatyr;
