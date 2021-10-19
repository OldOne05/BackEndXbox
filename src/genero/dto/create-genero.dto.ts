import { IsString } from "class-validator";
import { Genero } from "../entities/genero.entity";

export class CreateGeneroDto extends Genero {
    @IsString()
    name: string;
}
