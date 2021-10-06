import { Prisma } from ".prisma/client";
export declare class Perfi {
    id?: number;
    titulo: string;
    user: Prisma.UsuariosCreateNestedOneWithoutPerfisInput;
    userId: number;
}
