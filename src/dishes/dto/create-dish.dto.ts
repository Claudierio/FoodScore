import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateDishDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Name of the dish.' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Description of the dish.' })
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Price of the dish.' })
  price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'ID of the restaurant to which the dish belongs.' })
  restaurantId: string;
}
