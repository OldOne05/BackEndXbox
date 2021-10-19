import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';

@Injectable()
export class JogoService {
  constructor (private readonly prisma: PrismaService) {}

  private readonly _include: Prisma.JogoInclude= {
    generos: true,
    perfis: true
  }

  create(dto: CreateJogoDto) {
    const generosIds = dto.generosIds;

    delete dto.generosIds

    const perfisIds = dto.perfisIds;

    delete dto.perfisIds

    const data: Prisma.JogoCreateInput = {
      ...dto,
      generos: {
        connect: generosIds.map((generosIds) => ({ id: generosIds }))
      },
      perfis: {
        connect: perfisIds.map((perfisIds) => ({ id: perfisIds }))
      }
    };

    return this.prisma.jogo.create({
      data,
      include:this._include
    });
  }

  findAll() {
    return this.prisma.jogo.findMany({
      include:this._include
    });
  }

  findOne(id: number) {
    return this.prisma.jogo.findUnique({
      where: { id },
      include: this._include
    });
  }

  update(id: number, dto: UpdateJogoDto) {
    const generosIds = dto.generosIds;

    delete dto.generosIds
    
    const perfisIds = dto.perfisIds;

    delete dto.perfisIds

    const data: Prisma.JogoUpdateInput = {
      ...dto,
      generos: {
        connect: generosIds?.map((generosIds) => ({ id: generosIds })) || [],
      },
      perfis: {
        connect: perfisIds?.map((perfisIds) => ({ id: perfisIds })) || [],
      },
    };

    return this.prisma.jogo.update({
      where: { id },
      data,
      include: this._include
    });
  }

  remove(id: number) {
    return this.prisma.jogo.delete({
      where: { id }
    });
  }
}
