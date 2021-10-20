import { UpdatePerfilDto } from 'src/Perfis/dto/update-perfil.dto';
import { CreateUsuarioDto } from './create-usuario.dto';
declare const UpdateUsuarioDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUsuarioDto>>;
export declare class UpdateUsuarioDto extends UpdateUsuarioDto_base {
    perfis: UpdatePerfilDto[];
}
export {};
