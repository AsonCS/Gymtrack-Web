import { Module } from '@nestjs/common';
import { UserExercisesController } from './user_exercises.controller';

@Module({
  controllers: [UserExercisesController]
})
export class UserExercisesModule {}
