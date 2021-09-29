import { Prisma } from ".prisma/client";
export declare class Jogo implements Prisma.ProductUncheckedCreateInput {
    id?: number;
    name: string;
    price?: number;
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutProductInput;
}
