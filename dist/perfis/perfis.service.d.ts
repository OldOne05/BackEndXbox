import { CreatePerfiDto } from './dto/create-perfi.dto';
import { UpdatePerfiDto } from './dto/update-perfi.dto';
export declare class PerfisService {
    create(createPerfiDto: CreatePerfiDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePerfiDto: UpdatePerfiDto): string;
    remove(id: number): string;
}
