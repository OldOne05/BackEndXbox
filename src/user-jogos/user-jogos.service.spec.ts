import { Test, TestingModule } from '@nestjs/testing';
import { UserJogosService } from './user-jogos.service';

describe('UserJogosService', () => {
  let service: UserJogosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserJogosService],
    }).compile();

    service = module.get<UserJogosService>(UserJogosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
