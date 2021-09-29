import { Prisma } from ".prisma/client";

export class Jogo implements Prisma.ProductUncheckedCreateInput{
    id?: number;
    name: string;
    price?: number;
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutProductInput;
}