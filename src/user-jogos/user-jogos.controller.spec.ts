import { Test, TestingModule } from '@nestjs/testing';
import { UserJogosController } from './user-jogos.controller';
import { UserJogosService } from './user-jogos.service';

describe('UserJogosController', () => {
  let controller: UserJogosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserJogosController],
      providers: [UserJogosService],
    }).compile();

    controller = module.get<UserJogosController>(UserJogosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
