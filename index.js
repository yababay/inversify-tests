"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_config_1 = require("./japan/inversify.config");
var inversify_config_2 = require("./roman/inversify.config");
var inversify_config_3 = require("./russian/inversify.config");
var types_1 = require("./types");
var fighter1 = inversify_config_1.military.get(types_1.TYPES.Warrior);
var fighter2 = inversify_config_2.military.get(types_1.TYPES.Warrior);
var fighter3 = inversify_config_3.military.get(types_1.TYPES.Warrior);
console.log(fighter1.fight());
console.log(fighter1.sneak());
console.log(fighter2.fight());
console.log(fighter2.sneak());
console.log(fighter3.fight());
console.log(fighter3.sneak());
