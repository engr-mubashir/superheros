import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SuperheroDocument = Superhero & Document;

@Schema()
export class Superhero {
  @Prop({ type: String, required: true })
  alias: string;
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: [String] })
  powers: string[];
  @Prop({ type: [String] })
  weapons: string[];
  @Prop({ type: String, required: true })
  origin: string;
  @Prop({ type: [String] })
  associations: string[];
}

export const SuperheroSchema = SchemaFactory.createForClass(Superhero);
