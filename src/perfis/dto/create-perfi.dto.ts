import { IsNotEmpty, IsNumber, IsString, isString } from "class-validator";
import { Perfi } from "../entities/perfi.entity";

export class CreatePerfiDto extends Perfi{
    @IsString()
    @IsNotEmpty()
    titulo: string;
}
