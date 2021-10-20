import { IsInt } from "class-validator";
import { CreatePerfilDto } from "./create-perfil.dto";

export class UpdatePerfilDto extends CreatePerfilDto {
    @IsInt()
    id: number;
}