import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
  IsEnum,
} from 'class-validator';
import { IsPhone } from 'src/common/validators/is-phone.validator';

export enum Sex {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

export class CreateUserDto {
  @IsString({ message: 'Nome tem que ser do tipo string' })
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @ApiProperty({ description: 'Nome completo do usuário' })
  name: string;

  @IsString({ message: 'Email tem que ser do tipo string' })
  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  @ApiProperty({ description: 'Email do usuário' })
  email: string;

  @IsString({ message: 'Senha tem que ser do tipo string' })
  @IsNotEmpty({ message: 'Senha não pode ser vazia' })
  @ApiProperty({ description: 'Senha do usuário' })
  password: string;

  @IsString({ message: 'Imagem do usuário tem que ser do tipo string' })
  @IsOptional({ message: 'Imagem do usuário é opcional' })
  @ApiProperty({ description: 'Imagem do usuário.' })
  image: string;

  @IsOptional()
  @IsEnum(Sex, { message: 'Sexo deve ser do tipo Male, Female, ou Other' })
  @ApiProperty({ description: 'Sexo do usuário', enum: Sex, required: false })
  sex: Sex;

  @IsString({ message: 'Endereço tem que ser do tipo string' })
  @ApiProperty({ description: 'Endereço do usuário' })
  address: string;

  @IsString({ message: 'Telefone tem que ser do tipo string' })
  @IsPhone({ message: 'O telefone deve estar no formato (XX) XXXXX-XXXX.' })
  @IsNotEmpty({ message: 'O telefone não pode ser vazio' })
  @ApiProperty({ description: 'Telefone do usuário' })
  phone: string;

  @IsDateString({}, { message: 'Data de nascimento deve ser uma data válida' })
  @ApiProperty({ description: 'Data de nascimento do usuário' })
  birthdate: string;
}
