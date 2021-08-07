import { Module } from '@nestjs/common';
import { SuperherosService } from './superheros.service';
import { SuperherosController } from './superheros.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Superhero, SuperheroSchema } from './schemas/superhero.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Superhero.name, schema: SuperheroSchema },
    ]),
  ],
  controllers: [SuperherosController],
  providers: [SuperherosService],
})
export class SuperherosModule {}
