import { Prisma } from "@prisma/client";
import { IsInt, IsString, IsNotEmpty, IsOptional, IsEmail } from "class-validator";
import { Perfil } from "src/Perfis/entities/perfil.entities";
import { Usuarios } from "../entities/usuario.entity";

export class CreateUsuarioDto extends Usuarios {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    @IsOptional()
    sobrenome?: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    senha: string;

    @IsInt()
    @IsNotEmpty()
    CPF: number

    @IsOptional()
    perfis: Perfil[];
}

// export class CreatePerfiDto {
//     titulo: string;
//     imagem: string;
// }
