import { FieldException } from '../exception'

export interface Workout {
    description?: string
    exerciseExecutionIds: Array<string>
    id: string
    name: string
}

export function toWorkoutSource(workout: Partial<Workout>): Partial<Workout> {
    if (!workout.exerciseExecutionIds) {
        throw new FieldException('exerciseExecutionIds')
    }
    if (!workout.name) {
        throw new FieldException('name')
    }
    delete workout.id

    return {
        ...workout,
    }
}
