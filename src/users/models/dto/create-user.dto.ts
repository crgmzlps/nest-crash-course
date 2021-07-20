import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 80)
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  age?: number;
}
