import { Prisma } from "@prisma/client";
export declare class CreateUsuarioDto {
    nome: string;
    sobrenome?: string;
    email: string;
    senha: string;
    CPF: number;
    perfis: Prisma.PerfisUncheckedCreateNestedManyWithoutUserInput;
    jogosfav: Prisma.UserJogosUncheckedCreateNestedManyWithoutUsuariosInput;
}
