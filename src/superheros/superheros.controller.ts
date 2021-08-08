import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SuperherosService } from './superheros.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { UpdateSuperheroDto } from './dto/update-superhero.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Superheros')
@Controller('superheros')
export class SuperherosController {
  constructor(private readonly superherosService: SuperherosService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a super hero',
  })
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superherosService.create(createSuperheroDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all super heros',
  })
  findAll() {
    return this.superherosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a super hero',
  })
  findOne(@Param('id') id: string) {
    return this.superherosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a super hero',
  })
  update(
    @Param('id') id: string,
    @Body() updateSuperheroDto: UpdateSuperheroDto,
  ) {
    return this.superherosService.update(id, updateSuperheroDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a super hero',
  })
  remove(@Param('id') id: string) {
    return this.superherosService.remove(id);
  }
}
