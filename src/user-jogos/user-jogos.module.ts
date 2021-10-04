import { Module } from '@nestjs/common';
import { UserJogosService } from './user-jogos.service';
import { UserJogosController } from './user-jogos.controller';

@Module({
  controllers: [UserJogosController],
  providers: [UserJogosService]
})
export class UserJogosModule {}
