import { Prisma } from ".prisma/client";

export class UserJogo implements Prisma.UserJogosUncheckedCreateInput {
    usuariosId?: number;
    jogosId?: number;
}