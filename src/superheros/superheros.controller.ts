import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuperherosService } from './superheros.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { UpdateSuperheroDto } from './dto/update-superhero.dto';

@Controller('superheros')
export class SuperherosController {
  constructor(private readonly superherosService: SuperherosService) {}

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superherosService.create(createSuperheroDto);
  }

  @Get()
  findAll() {
    return this.superherosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.superherosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuperheroDto: UpdateSuperheroDto) {
    return this.superherosService.update(+id, updateSuperheroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.superherosService.remove(+id);
  }
}
