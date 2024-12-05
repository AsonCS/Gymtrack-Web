import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExercisesModule } from './exercises/exercises.module';
import { UserExercisesModule } from './user_exercises/user_exercises.module';

@Module({
  imports: [ExercisesModule, UserExercisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
