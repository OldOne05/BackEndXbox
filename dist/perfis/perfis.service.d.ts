import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
export declare class PerfisService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePerfilDto): import(".prisma/client").Prisma.Prisma__PerfisClient<import(".prisma/client").Perfis>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Perfis[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PerfisClient<import(".prisma/client").Perfis>;
    update(id: number, data: UpdatePerfilDto): import(".prisma/client").Prisma.Prisma__PerfisClient<import(".prisma/client").Perfis>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PerfisClient<import(".prisma/client").Perfis>;
}
