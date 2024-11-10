import { Module } from '@nestjs/common';
import { CreateChallengeController } from './create-challenge.controller';
import { CreateChallengeService } from './create-challenge.service';
import { NextActionModule } from './next-action/next-action.module';

@Module({
  controllers: [CreateChallengeController],
  providers: [CreateChallengeService],
  imports: [NextActionModule]
})
export class CreateChallengeModule {}
