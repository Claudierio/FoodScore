import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RatingReviewsDishDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'ID do prato' })
  dishId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'ID do usuário' })
  userId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nota do prato' })
  rating: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Comentário do prato' })
  description: string;
}
