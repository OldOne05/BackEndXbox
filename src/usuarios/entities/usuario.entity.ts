import { Perfil } from "src/Perfis/entities/perfil.entities";

export class Usuarios {
    id?: number;
    nome: string;
    sobrenome?: string;
    email: string;
    senha: string;
    CPF: number;
    perfis: Perfil[];
}