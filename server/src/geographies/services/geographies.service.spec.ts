import { Test, TestingModule } from '@nestjs/testing';
import { GeographiesService } from './geographies.service';

describe('GeographiesService', () => {
  let service: GeographiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeographiesService],
    }).compile();

    service = module.get<GeographiesService>(GeographiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
