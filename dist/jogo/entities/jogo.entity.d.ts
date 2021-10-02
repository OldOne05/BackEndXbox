import { Prisma } from ".prisma/client";
export declare class Jogo implements Prisma.JogoUncheckedCreateInput {
    id?: number;
    name: string;
    price?: number;
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutJogoInput;
}
