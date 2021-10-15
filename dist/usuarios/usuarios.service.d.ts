import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '.prisma/client';
export declare class UsuariosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(dto: CreateUsuarioDto): Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios & {
        perfis: {
            titulo: string;
            imagem: string;
            id: number;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Usuarios & {
        perfis: {
            titulo: string;
            imagem: string;
            id: number;
        }[];
    })[]>;
    findOne(id: number): Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios & {
        perfis: {
            titulo: string;
            imagem: string;
            id: number;
        }[];
    }>;
    update(id: number, data: UpdateUsuarioDto): Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios & {
        perfis: {
            titulo: string;
            imagem: string;
            id: number;
        }[];
    }>;
    remove(id: number): Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios>;
}
