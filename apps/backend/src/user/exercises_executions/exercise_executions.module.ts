import { Module } from '@nestjs/common'
import { ExerciseExecutionsController } from './exercise_executions.controller'

@Module({
    controllers: [ExerciseExecutionsController],
})
export class ExerciseExecutionsModule {}
