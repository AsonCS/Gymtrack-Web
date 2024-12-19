import { Execution } from './Execution'
import { Exercise } from './Exercise'

export interface ExerciseExecution {
    exercise: Exercise
    id: string
    name: string
}

export interface ExerciseExecutionDetail extends ExerciseExecution {
    description?: string | null
    executions: Array<Execution>
}

export function toExerciseExecution(
    detail: ExerciseExecutionDetail
): ExerciseExecution {
    return {
        exercise: detail.exercise,
        id: detail.id,
        name: detail.name,
    }
}

export function toSimpleView(detail: ExerciseExecutionDetail) {
    return {
        id: detail.id,
        name: detail.name,
    }
}
