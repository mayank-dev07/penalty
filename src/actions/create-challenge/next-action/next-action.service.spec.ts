import { Test, TestingModule } from '@nestjs/testing';
import { NextActionService } from './next-action.service';

describe('NextActionService', () => {
  let service: NextActionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NextActionService],
    }).compile();

    service = module.get<NextActionService>(NextActionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
