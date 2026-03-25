import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty({ example: 'Admin', description: 'O nome do perfil' })
  @IsString()
  @IsNotEmpty()
  name: string;
}

