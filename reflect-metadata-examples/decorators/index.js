"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logParameter = exports.logMethod = void 0;
function logMethod(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var metadataKey = "__log_".concat(key, "_parameters");
        var indices = target[metadataKey];
        if (Array.isArray(indices)) {
            for (var i = 0; i < args.length; i++) {
                if (indices.indexOf(i) !== -1) {
                    var arg = args[i];
                    var argStr = JSON.stringify(arg) || arg.toString();
                    console.log("".concat(key, " arg[").concat(i, "]: ").concat(argStr));
                }
            }
            var result = originalMethod.apply(this, args);
            return result;
        }
        else {
            var a = args.map(function (a) { return (JSON.stringify(a) || a.toString()); }).join();
            var result = originalMethod.apply(this, args);
            var r = JSON.stringify(result);
            console.log("Call: ".concat(key, "(").concat(a, ") => ").concat(r));
            return result;
        }
    };
    return descriptor;
}
exports.logMethod = logMethod;
function logParameter(target, key, index) {
    var metadataKey = "log_".concat(key, "_parameters");
    console.log(target, key, index);
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
}
exports.logParameter = logParameter;
