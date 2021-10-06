import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
export declare class GenerosService {
    create(createGeneroDto: CreateGeneroDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGeneroDto: UpdateGeneroDto): string;
    remove(id: number): string;
}
