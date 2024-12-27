import { Wrapper } from '@/data/_utils/Wrapper'
import { Exercise, ExerciseDetail } from '@/model/exercise'

const EXERCISES = 'exercises'

export interface ExerciseApi {
    getExercise: (alias: string) => Promise<ExerciseDetail>
    getExercises: () => Promise<Array<Exercise>>
}

export function exerciseApi(): ExerciseApi {
    return {
        async getExercise(alias) {
            const result: Wrapper<ExerciseDetail> = await fetch(
                `${process.env.NEXT_PUBLIC_HOST_API}/${EXERCISES}/${alias}`
            ).then((res) => res.json())
            if (!result.data) {
                throw new Error(result.error ?? 'Error')
            }
            return result.data
        },
        async getExercises() {
            const result: Wrapper<Array<Exercise>> = await fetch(
                `${process.env.NEXT_PUBLIC_HOST_API}/${EXERCISES}`
            ).then((res) => res.json())
            if (!result.data) {
                throw new Error(result.error ?? 'Error')
            }
            return result.data
        },
    }
}
