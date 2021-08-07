import { Test, TestingModule } from '@nestjs/testing';
import { SuperherosController } from './superheros.controller';
import { SuperherosService } from './superheros.service';

describe('SuperherosController', () => {
  let controller: SuperherosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperherosController],
      providers: [SuperherosService],
    }).compile();

    controller = module.get<SuperherosController>(SuperherosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
