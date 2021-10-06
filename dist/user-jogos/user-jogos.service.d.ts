import { CreateUserJogoDto } from './dto/create-user-jogo.dto';
import { UpdateUserJogoDto } from './dto/update-user-jogo.dto';
export declare class UserJogosService {
    create(createUserJogoDto: CreateUserJogoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserJogoDto: UpdateUserJogoDto): string;
    remove(id: number): string;
}
