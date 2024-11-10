import { Module } from '@nestjs/common';
import { ChallengeController } from './challenge.controller';
import { ChallengeService } from './challenge.service';
import { NextActionModule } from './next-action/next-action.module';

@Module({
  controllers: [ChallengeController],
  providers: [ChallengeService],
  imports: [NextActionModule]
})
export class ChallengeModule {}
