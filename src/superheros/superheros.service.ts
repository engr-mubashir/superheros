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

  async create(createSuperheroDto: CreateSuperheroDto) {
    const superhero = new this.superheroModel(createSuperheroDto);
    return await superhero.save();
  }

  async findAll() {
    return await this.superheroModel.find().exec();
  }

  async findOne(id: string) {
    return await this.superheroModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateSuperheroDto: UpdateSuperheroDto) {
    return await this.superheroModel
      .updateOne({ _id: id }, updateSuperheroDto)
      .exec();
  }

  async remove(id: string) {
    return await this.superheroModel.remove({ _id: id }).exec();
  }
}
