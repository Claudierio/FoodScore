import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsPhone } from 'src/common/validators/is-phone.validator';

export class CreateRestaurantDto {
  @IsString({ message: 'Nome do restaurante tem que ser do tipo string' })
  @IsNotEmpty({ message: 'Nome do restaurante não pode ser vazio' })
  @ApiProperty({ description: 'Nome do restaurante.' })
  name: string;

  @IsString({ message: 'Endereço do restaurante tem que ser do tipo string' })
  @IsNotEmpty({ message: 'Endereço do restaurante não pode ser vazio' })
  @ApiProperty({ description: 'Endereço do restaurante.' })
  address: string;

  @IsString({ message: 'Telefone do restaurante tem que ser do tipo string' })
  @IsNotEmpty({ message: 'Telefone do restaurante não pode ser vazio' })
  @IsPhone({ message: 'O telefone deve estar no formato (XX) XXXXX-XXXX.' })
  @ApiProperty({ description: 'Telefone do restaurante.' })
  phone: string;

  @IsString({ message: 'Imagem do restaurante tem que ser do tipo string' })
  @IsOptional({ message: 'Imagem do restaurante é opcional' })
  @ApiProperty({ description: 'Imagem do restaurante.' })
  image: string;

  @IsString({ message: 'Horário de abertura deve ser uma string.' })
  @IsNotEmpty({ message: 'Horário de abertura não pode ser vazio.' })
  @ApiProperty({ description: 'Horário de abertura do restaurante.', example: '08:00' })
  openingTime: string;

  @IsString({ message: 'Horário de fechamento deve ser uma string.' })
  @IsNotEmpty({ message: 'Horário de fechamento não pode ser vazio.' })
  @ApiProperty({ description: 'Horário de fechamento do restaurante.', example: '22:00' })
  closingTime: string;
}
