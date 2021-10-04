import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { JogoModule } from './jogo/jogo.module';
import { UserJogosModule } from './user-jogos/user-jogos.module';
import { GenerosModule } from './generos/generos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PerfisModule } from './perfis/perfis.module';
import { JogoModule } from './jogo/jogo.module';

@Module({
  imports: [JogoModule, UsuariosModule, PerfisModule, GenerosModule, UserJogosModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
