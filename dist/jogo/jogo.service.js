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
exports.JogoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let JogoService = class JogoService {
    constructor(prisma) {
        this.prisma = prisma;
        this._include = {
            generos: true,
            perfis: true
        };
    }
    create(dto) {
        const generosIds = dto.generosIds;
        delete dto.generosIds;
        const perfisIds = dto.perfisIds;
        delete dto.perfisIds;
        const data = Object.assign(Object.assign({}, dto), { generos: {
                connect: generosIds.map((generosIds) => ({ id: generosIds }))
            }, perfis: {
                connect: perfisIds.map((perfisIds) => ({ id: perfisIds }))
            } });
        return this.prisma.jogo.create({
            data,
            include: this._include
        });
    }
    findAll() {
        return this.prisma.jogo.findMany({
            include: this._include
        });
    }
    findOne(id) {
        return this.prisma.jogo.findUnique({
            where: { id },
            include: this._include
        });
    }
    update(id, dto) {
        const generosIds = dto.generosIds;
        delete dto.generosIds;
        const perfisIds = dto.perfisIds;
        delete dto.perfisIds;
        const data = Object.assign(Object.assign({}, dto), { generos: {
                connect: (generosIds === null || generosIds === void 0 ? void 0 : generosIds.map((generosIds) => ({ id: generosIds }))) || [],
            }, perfis: {
                connect: (perfisIds === null || perfisIds === void 0 ? void 0 : perfisIds.map((perfisIds) => ({ id: perfisIds }))) || [],
            } });
        return this.prisma.jogo.update({
            where: { id },
            data,
            include: this._include
        });
    }
    remove(id) {
        return this.prisma.jogo.delete({
            where: { id }
        });
    }
};
JogoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], JogoService);
exports.JogoService = JogoService;
//# sourceMappingURL=jogo.service.js.map