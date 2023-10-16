"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
function methodBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = methodBinder(Methods_1.Methods.get);
exports.post = methodBinder(Methods_1.Methods.post);
exports.put = methodBinder(Methods_1.Methods.put);
exports.del = methodBinder(Methods_1.Methods.delete);
exports.patch = methodBinder(Methods_1.Methods.patch);
