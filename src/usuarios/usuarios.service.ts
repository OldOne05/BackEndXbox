import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '.prisma/client';

@Injectable()
export class UsuariosService {
  constructor (private readonly prisma: PrismaService) {}

  private readonly _include = {
    perfis: {
      select: {
        id: false,
        titulo: true,
        imagem: true,
      }
    }
  }
  create(dto: CreateUsuarioDto) {
    const data: Prisma.UsuariosCreateInput = {
      ...dto,
      perfis: {
        create: dto.perfis,
      },
    };

    return this.prisma.usuarios.create({
      data,
      include:this._include
    });
  }

  findAll() {
    return this.prisma.usuarios.findMany({
      include:this._include
    });
  }

  findOne(id: number) {
    return this.prisma.usuarios.findUnique({
      where: {id},
      include: this._include
    });
  }

  update(id: number, data: UpdateUsuarioDto) {
    return this.prisma.usuarios.update({
      where: {id},
      data,
      include: this._include
    });
  }

  remove(id: number) {
    return this.prisma.usuarios.delete({
      where: {id}
    });
  }
}
