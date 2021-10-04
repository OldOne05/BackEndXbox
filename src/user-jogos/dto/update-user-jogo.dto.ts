import { PartialType } from '@nestjs/mapped-types';
import { CreateUserJogoDto } from './create-user-jogo.dto';

export class UpdateUserJogoDto extends PartialType(CreateUserJogoDto) {}
