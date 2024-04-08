import { Test, TestingModule } from '@nestjs/testing';
import { GeographiesController } from './geographies.controller';

describe('GeographiesController', () => {
  let controller: GeographiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeographiesController],
    }).compile();

    controller = module.get<GeographiesController>(GeographiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
