import { Prisma } from ".prisma/client";

export class Jogo implements Prisma.JogoUncheckedCreateInput{
    id?: number;
    name: string;
    price?: number;
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutJogoInput
}