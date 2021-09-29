import { Prisma } from "@prisma/client";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Jogo } from "../entities/jogo.entity";

export class CreateJogoDto extends Jogo {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @IsOptional()
    price?: number | null;

    @IsOptional()
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutJogoInput;
}