import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserJogosService } from './user-jogos.service';
import { CreateUserJogoDto } from './dto/create-user-jogo.dto';
import { UpdateUserJogoDto } from './dto/update-user-jogo.dto';

@Controller('user-jogos')
export class UserJogosController {
  constructor(private readonly userJogosService: UserJogosService) {}

  @Post()
  create(@Body() createUserJogoDto: CreateUserJogoDto) {
    return this.userJogosService.create(createUserJogoDto);
  }

  @Get()
  findAll() {
    return this.userJogosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userJogosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserJogoDto: UpdateUserJogoDto) {
    return this.userJogosService.update(+id, updateUserJogoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userJogosService.remove(+id);
  }
}
