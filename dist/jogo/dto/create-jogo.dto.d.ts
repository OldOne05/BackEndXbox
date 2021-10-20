import { Jogo } from "../entities/jogo.entity";
export declare class CreateJogoDto extends Jogo {
    titulo: string;
    capa: string;
    descricao: string;
    ano: number;
    nota?: number;
    trailer?: string;
    gmp?: string;
    generosIds: number[];
    perfisIds: number[];
}
