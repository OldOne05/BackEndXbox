import { Perfil } from "src/Perfis/entities/perfil.entities";
import { Usuarios } from "../entities/usuario.entity";
export declare class CreateUsuarioDto extends Usuarios {
    nome: string;
    sobrenome?: string;
    email: string;
    senha: string;
    CPF: number;
    perfis: Perfil[];
}
