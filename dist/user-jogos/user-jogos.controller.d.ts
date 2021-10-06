import { UserJogosService } from './user-jogos.service';
import { CreateUserJogoDto } from './dto/create-user-jogo.dto';
import { UpdateUserJogoDto } from './dto/update-user-jogo.dto';
export declare class UserJogosController {
    private readonly userJogosService;
    constructor(userJogosService: UserJogosService);
    create(createUserJogoDto: CreateUserJogoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserJogoDto: UpdateUserJogoDto): string;
    remove(id: string): string;
}
