import { Prisma } from "@prisma/client";
import { IsInt, IsString, IsNotEmpty, IsOptional, IsEmail } from "class-validator";
import { Usuarios } from "../entities/usuario.entity";

export class CreateUsuarioDto {
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


    perfis: Prisma.PerfisUncheckedCreateNestedManyWithoutUserInput;

    jogosfav: Prisma.UserJogosUncheckedCreateNestedManyWithoutUsuariosInput;
}
