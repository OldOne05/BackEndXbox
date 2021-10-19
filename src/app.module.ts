import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { JogoModule } from './jogo/jogo.module';
import { GeneroResolver } from './genero/genero.resolver';
import { GeneroModule } from './genero/genero.module';
import { GeneroModule } from './genero/genero.module';

@Module({
  imports: [ UsuariosModule, JogoModule, GeneroModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, GeneroResolver],
})
export class AppModule {}
