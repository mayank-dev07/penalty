import { Test, TestingModule } from '@nestjs/testing';
import { CreateChallengeController } from './create-challenge.controller';

describe('CreateChallengeController', () => {
  let controller: CreateChallengeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateChallengeController],
    }).compile();

    controller = module.get<CreateChallengeController>(CreateChallengeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
