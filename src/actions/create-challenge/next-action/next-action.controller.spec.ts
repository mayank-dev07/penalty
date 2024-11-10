import { Test, TestingModule } from '@nestjs/testing';
import { NextActionController } from './next-action.controller';

describe('NextActionController', () => {
  let controller: NextActionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NextActionController],
    }).compile();

    controller = module.get<NextActionController>(NextActionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
