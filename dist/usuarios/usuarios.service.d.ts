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
    findOne(id: number): Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios & {
        perfis: {
            id: number;
            titulo: string;
            imagem: string;
        }[];
    }>;
    update(id: number, dto: UpdateUsuarioDto): Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios & {
        perfis: {
            id: number;
            titulo: string;
            imagem: string;
        }[];
    }>;
    remove(id: number): Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios>;
}
