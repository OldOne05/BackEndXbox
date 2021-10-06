"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogoService = void 0;
const common_1 = require("@nestjs/common");
let JogoService = class JogoService {
    create(createJogoDto) {
        return 'This action adds a new jogo';
    }
    findAll() {
        return `This action returns all jogo`;
    }
    findOne(id) {
        return `This action returns a #${id} jogo`;
    }
    update(id, updateJogoDto) {
        return `This action updates a #${id} jogo`;
    }
    remove(id) {
        return `This action removes a #${id} jogo`;
    }
};
JogoService = __decorate([
    (0, common_1.Injectable)()
], JogoService);
exports.JogoService = JogoService;
//# sourceMappingURL=jogo.service.js.map