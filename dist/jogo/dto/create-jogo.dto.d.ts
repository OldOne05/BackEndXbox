import { Prisma } from "@prisma/client";
import { Jogo } from "../entities/jogo.entity";
export declare class CreateJogoDto extends Jogo {
    name: string;
    price?: number | null;
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutJogoInput;
}
