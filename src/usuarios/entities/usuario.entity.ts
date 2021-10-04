import { Prisma } from "@prisma/client";

export class Usuarios implements Prisma.UsuariosUncheckedCreateInput{
    id?: number;
    nome: string;
    sobrenome?: string;
    email: string;
    senha: string;
    CPF: number;
    perfis: Prisma.PerfisUncheckedCreateNestedManyWithoutUserInput;
    jogosFav: Prisma.UserJogosUncheckedCreateNestedManyWithoutUsuariosInput;
}
