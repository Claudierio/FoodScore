import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateDishDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nome do prato.' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Descrição do prato.' })
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Preço do prato.' })
  price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'ID do restaurante ao qual o prato pertence.' })
  restaurantId: string;
}
