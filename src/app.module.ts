import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SuperherosModule } from './superheros/superheros.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri:
          'mongodb://' +
          configService.get<string>('MONGO_SERVER') +
          ':' +
          configService.get<string>('MONGO_PORT') +
          '/' +
          configService.get<string>('MONGO_DB'),
      }),
      inject: [ConfigService],
    }),
    SuperherosModule,
  ],
})
export class AppModule {}
