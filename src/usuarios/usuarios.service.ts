import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '.prisma/client';
import { UpdatePerfilDto } from 'src/Perfis/dto/update-perfil.dto';

@Injectable()
export class UsuariosService {
  constructor (private readonly prisma: PrismaService) {}

  private readonly _include = {
    perfis: {
      select: {
        id: true,
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

  update(id: number, dto: UpdateUsuarioDto) {
    const data: Prisma.UsuariosUpdateInput = {
      ...dto,
      perfis: {
        upsert: dto.perfis.map(UpdatePerfilDto => {
          return {
            where: { id: UpdatePerfilDto.id },
            update: { titulo: UpdatePerfilDto.titulo, 
              imagem: UpdatePerfilDto.imagem },
            create: { titulo: UpdatePerfilDto.titulo,
              imagem: UpdatePerfilDto.imagem }
          };
        })
      }
    };

    return this.prisma.usuarios.update({
      where: { id },
      data,
      include: this._include
    });
  }

  remove(id: number) {
    return this.prisma.usuarios.delete({
      where: { id }
    });
  }
}
