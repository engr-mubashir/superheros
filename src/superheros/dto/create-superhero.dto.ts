import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class CreateSuperheroDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  alias: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @IsString()
  powers: string[];

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @IsString()
  weapons: string[];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  origin: string;

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @IsString()
  associations: string[];
}
