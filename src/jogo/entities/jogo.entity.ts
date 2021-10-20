import { Genero } from "src/genero/entities/genero.entity";
import { Perfil } from "src/Perfis/entities/perfil.entity";

export class Jogo {
    id?: number;
    titulo: string;
    capa: string;
    descricao?: string;
    ano: number;
    nota?: number;
    trailer?: string;
    gmp?: string;
    generos: Genero[]
    perfis: Perfil[]
}
