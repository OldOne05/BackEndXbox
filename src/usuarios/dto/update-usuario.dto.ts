import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdatePerfilDto } from 'src/Perfis/dto/update-perfil.dto';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    @ValidateNested({ each: true })
    @Type(() => UpdatePerfilDto)
    @IsArray()
    @IsOptional()
    perfis: UpdatePerfilDto[]
}
