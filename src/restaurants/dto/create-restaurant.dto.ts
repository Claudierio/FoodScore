import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { IsPhone } from 'src/common/validators/is-phone.validator';

export class CreateRestaurantDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nome do restaurante.' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Endereço do restaurante.' })
  address: string;

  @IsString()
  @IsNotEmpty()
  @IsPhone({ message: 'O telefone deve estar no formato (XX) XXXXX-XXXX.' })
  @ApiProperty({ description: 'Telefone do restaurante.' })
  phone: string;
}
