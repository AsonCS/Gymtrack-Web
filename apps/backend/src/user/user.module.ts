import { Module } from '@nestjs/common'

import { ExerciseExecutionsModule } from './exercises_executions/exercise_executions.module'
import { WorkoutsModule } from './workouts/workouts.module'

@Module({
    imports: [ExerciseExecutionsModule, WorkoutsModule],
})
export class UserModule {}
