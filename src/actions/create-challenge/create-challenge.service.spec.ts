import { Test, TestingModule } from '@nestjs/testing';
import { CreateChallengeService } from './create-challenge.service';

describe('CreateChallengeService', () => {
  let service: CreateChallengeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateChallengeService],
    }).compile();

    service = module.get<CreateChallengeService>(CreateChallengeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
