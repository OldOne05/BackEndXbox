import { Prisma } from "@prisma/client";

export class Jogo implements Prisma.JogoUncheckedCreateInput {
    id?: number;
    titulo: string;
    capa: string;
    descricao: string;
    ano: number;
    nota?: number;
    
}
