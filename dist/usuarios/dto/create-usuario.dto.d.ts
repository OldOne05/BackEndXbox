import { CreatePerfilDto } from "src/Perfis/dto/create-perfil.dto";
import { Usuarios } from "../entities/usuario.entity";
export declare class CreateUsuarioDto extends Usuarios {
    nome: string;
    sobrenome?: string;
    email: string;
    senha: string;
    CPF: number;
    perfis: CreatePerfilDto[];
}
