import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class FindByEmailDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'Email do usuário que deseja encontrar.' })
  email: string;
}
