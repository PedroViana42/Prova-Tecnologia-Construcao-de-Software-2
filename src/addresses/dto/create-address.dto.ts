import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty({ example: 'Rua das Flores', description: 'Nome da rua' })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({ example: 123, description: 'Número do endereço' })
  @IsInt()
  number: number;

  @ApiProperty({ example: 'São Paulo', description: 'Cidade' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'SP', description: 'Estado' })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({ example: '12345-678', description: 'CEP' })
  @IsString()
  @IsNotEmpty()
  zipCode: string;

  @ApiProperty({ example: 'uuid-do-usuario', description: 'ID do usuário associado' })
  @IsUUID()
  @IsNotEmpty()
  userId: string;
}

