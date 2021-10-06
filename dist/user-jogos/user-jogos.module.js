"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserJogosModule = void 0;
const common_1 = require("@nestjs/common");
const user_jogos_service_1 = require("./user-jogos.service");
const user_jogos_controller_1 = require("./user-jogos.controller");
let UserJogosModule = class UserJogosModule {
};
UserJogosModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_jogos_controller_1.UserJogosController],
        providers: [user_jogos_service_1.UserJogosService]
    })
], UserJogosModule);
exports.UserJogosModule = UserJogosModule;
//# sourceMappingURL=user-jogos.module.js.map