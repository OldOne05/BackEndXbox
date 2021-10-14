import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsuariosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateUsuarioDto): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios & {
        perfis: {
            id: number;
            titulo: string;
            imagem: string;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Usuarios & {
        perfis: {
            id: number;
            titulo: string;
            imagem: string;
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios & {
        perfis: {
            id: number;
            titulo: string;
            imagem: string;
        }[];
    }>;
    update(id: number, data: UpdateUsuarioDto): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios & {
        perfis: {
            id: number;
            titulo: string;
            imagem: string;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios>;
}
