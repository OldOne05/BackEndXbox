import { Prisma } from "@prisma/client";
export declare class Jogo implements Prisma.JogoUncheckedCreateInput {
    id?: number;
    titulo: string;
    capa: string;
    descricao: string;
    ano: number;
    linkYtb: string;
    linkGmp: string;
    nota?: number;
    userFav: Prisma.UserJogosCreateNestedManyWithoutJogosInput;
    genero: Prisma.GenerosCreateNestedManyWithoutJogoInput;
}
