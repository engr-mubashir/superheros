import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class CreateSuperheroDto {
  @IsNotEmpty()
  @IsString()
  alias: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @IsString()
  powers: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @IsString()
  weapons: string[];

  @IsNotEmpty()
  @IsString()
  origin: string;

  @IsArray()
  @ValidateNested({ each: true })
  @IsString()
  associations: string[];
}
