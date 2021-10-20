import { IsInt, IsNotEmpty, IsString, IsArray, ArrayNotEmpty } from "class-validator";
import { Jogo } from "../entities/jogo.entity";

export class CreateJogoDto extends Jogo {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsNotEmpty()
    capa: string;

    @IsString()
    @IsNotEmpty()
    descricao: string;

    @IsInt()
    @IsNotEmpty()
    ano: number;

    @IsInt()
    nota?: number;

    trailer?: string;

    gmp?: string;

    @IsInt({ each: true })
    @IsArray()
    @ArrayNotEmpty()
    generosIds: number[];

    @IsInt({ each: true })
    @IsArray()
    @ArrayNotEmpty()
    perfisIds: number[]
}
