"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_config_1 = require("./japan/inversify.config");
var types_1 = require("./types");
var ninja = inversify_config_1.militaryContainer.get(types_1.TYPES.Warrior);
//expect(ninja.fight()).eql("cut!"); // true
//expect(ninja.sneak()).eql("hit!"); // true
console.log(ninja.fight());
console.log(ninja.sneak());
