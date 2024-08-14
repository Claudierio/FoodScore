import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  Max,
} from 'class-validator';
import { IsInteger } from 'src/common/validators/is-intereger.validator';

export class CreateReviewDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(5)
  @IsInteger()
  rating: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsOptional()
  restaurantId: string;
}
