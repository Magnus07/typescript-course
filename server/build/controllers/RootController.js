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
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
function requireAuth(req, res, next) {
    if (req.session && req.session.isLoggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Forbidden");
}
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res) {
        if (req.session && req.session.isLoggedIn) {
            res.send("\n                  <h1>You are logged in</h1>\n                  <a href=\"/logout\">log out</a>\n                  ");
        }
        else {
            res.send("\n                  <h1>You are NOT logged in</h1>\n                  <a href=\"/auth/login\">log in</a>\n                  ");
        }
    };
    RootController.prototype.logout = function (req, res) {
        req.session = undefined;
        res.redirect("/");
    };
    RootController.prototype.getProtected = function (req, res) {
        res.send("Welcome, logged in user!");
    };
    __decorate([
        (0, decorators_1.get)("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    __decorate([
        (0, decorators_1.get)("/logout"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "logout", null);
    __decorate([
        (0, decorators_1.get)("/protected"),
        (0, decorators_1.use)(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getProtected", null);
    RootController = __decorate([
        (0, decorators_1.controller)("")
    ], RootController);
    return RootController;
}());
