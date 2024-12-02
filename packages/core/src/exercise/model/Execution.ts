import { Exercise } from './Exercise'

export interface Execution {
    exercise: Exercise
    id: string
    notes: string
    reps: number
    weight: number
}
