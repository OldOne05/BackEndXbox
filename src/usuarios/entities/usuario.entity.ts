import { Perfil } from "src/Perfis/entities/perfil.entity";

export class Usuarios {
    id?: number;
    nome: string;
    sobrenome?: string;
    email: string;
    senha: string;
    CPF: number;
    perfis: Perfil[];
}