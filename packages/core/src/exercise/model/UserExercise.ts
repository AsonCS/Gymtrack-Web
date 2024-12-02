import { Execution } from './Execution'
import { Exercise } from './Exercise'

export interface UserExercise {
    exercise: Exercise
    id: string
    executions: Array<Execution>
}
