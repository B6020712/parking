import { Test, TestingModule } from '@nestjs/testing';
import { AmphuresService } from './amphures.service';

describe('AmphuresService', () => {
  let service: AmphuresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmphuresService],
    }).compile();

    service = module.get<AmphuresService>(AmphuresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
