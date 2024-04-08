import { Test, TestingModule } from '@nestjs/testing';
import { AmphuresController } from './amphures.controller';

describe('AmphuresController', () => {
  let controller: AmphuresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmphuresController],
    }).compile();

    controller = module.get<AmphuresController>(AmphuresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
