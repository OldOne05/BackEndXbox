import { GenerosService } from './generos.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
export declare class GenerosController {
    private readonly generosService;
    constructor(generosService: GenerosService);
    create(createGeneroDto: CreateGeneroDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGeneroDto: UpdateGeneroDto): string;
    remove(id: string): string;
}
