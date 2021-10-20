import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuarioDto: CreateUsuarioDto): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios & {
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
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios & {
        perfis: {
            id: number;
            titulo: string;
            imagem: string;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios>;
}
