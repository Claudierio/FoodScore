import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Min, Max } from 'class-validator';
import { IsInteger } from 'src/common/validators/is-intereger.validator';

export class CreateReviewRestaurantDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(5)
  @IsInteger()
  @ApiProperty({ description: 'Nota da avaliação.' })
  rating: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Descrição da avaliação.' })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'ID do usuário que fez a avaliação.' })
  userId: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'ID do restaurante avaliado.' })
  restaurantId: string;
}
