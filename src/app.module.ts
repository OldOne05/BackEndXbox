import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { JogoModule } from './jogo/jogo.module';

@Module({
  imports: [JogoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
