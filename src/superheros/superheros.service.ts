import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { UpdateSuperheroDto } from './dto/update-superhero.dto';
import { Superhero, SuperheroDocument } from './schemas/superhero.schema';

@Injectable()
export class SuperherosService {
  constructor(
    @InjectModel(Superhero.name)
    private superheroModel: Model<SuperheroDocument>,
  ) {}

  create(createSuperheroDto: CreateSuperheroDto) {
    return 'This action adds a new superhero';
  }

  findAll() {
    return `This action returns all superheros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} superhero`;
  }

  update(id: number, updateSuperheroDto: UpdateSuperheroDto) {
    return `This action updates a #${id} superhero`;
  }

  remove(id: number) {
    return `This action removes a #${id} superhero`;
  }
}
