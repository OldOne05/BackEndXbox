import { Injectable } from '@nestjs/common';
import { CreateUserJogoDto } from './dto/create-user-jogo.dto';
import { UpdateUserJogoDto } from './dto/update-user-jogo.dto';

@Injectable()
export class UserJogosService {
  create(createUserJogoDto: CreateUserJogoDto) {
    return 'This action adds a new userJogo';
  }

  findAll() {
    return `This action returns all userJogos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userJogo`;
  }

  update(id: number, updateUserJogoDto: UpdateUserJogoDto) {
    return `This action updates a #${id} userJogo`;
  }

  remove(id: number) {
    return `This action removes a #${id} userJogo`;
  }
}
