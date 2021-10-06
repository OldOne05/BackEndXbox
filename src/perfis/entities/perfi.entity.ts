import { Prisma } from ".prisma/client";

export class Perfi {
    id?: number;
    titulo: string;
    user: Prisma.UsuariosCreateNestedOneWithoutPerfisInput
    userId: number;
}
