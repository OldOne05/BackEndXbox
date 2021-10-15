import { isNotEmpty, IsNotEmpty, isString, IsString } from "class-validator";
import { Perfil } from "../entities/perfil.entities";

export class CreatePerfilDto extends Perfil {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsNotEmpty()
    imagem: string;
}