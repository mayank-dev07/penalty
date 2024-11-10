import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateChallengeModule } from './actions/create-challenge/create-challenge.module';
import { ChallengeModule } from './actions/challenge/challenge.module';

@Module({
  imports: [CreateChallengeModule, ChallengeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
