import { Execution } from './Execution'
import { Exercise } from './Exercise'

export interface UserExercise {
    exercise: Exercise
    id: string
    name: string
}

export interface UserExerciseDetail extends UserExercise {
    description?: string
    executions: Array<Execution>
}
