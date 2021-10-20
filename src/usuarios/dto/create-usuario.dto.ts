import { Prisma } from "@prisma/client";
import { Type } from "class-transformer";
import { IsInt, IsString, IsNotEmpty, IsOptional, IsEmail, IsArray, ValidateNested } from "class-validator";
import { CreatePerfilDto } from "src/Perfis/dto/create-perfil.dto";
import { Perfil } from "src/Perfis/entities/perfil.entity";
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
    CPF: number;
    
    @ValidateNested({ each: true })
    @Type(() => CreatePerfilDto)
    @IsArray()
    perfis: CreatePerfilDto[];
}
