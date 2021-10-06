import { PerfisService } from './perfis.service';
import { CreatePerfiDto } from './dto/create-perfi.dto';
import { UpdatePerfiDto } from './dto/update-perfi.dto';
export declare class PerfisController {
    private readonly perfisService;
    constructor(perfisService: PerfisService);
    create(createPerfiDto: CreatePerfiDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePerfiDto: UpdatePerfiDto): string;
    remove(id: string): string;
}
