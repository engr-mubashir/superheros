import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
