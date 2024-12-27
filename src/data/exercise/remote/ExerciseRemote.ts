import { Exercise, ExerciseDetail } from '@/model/exercise'

import { ExerciseApi } from '../api/ExerciseApi'
import UnknownException from '@/model/exception/UnknownException'

export interface ExerciseRemote {
    getExercise: (idOrAlias: string) => Promise<ExerciseDetail>
    getExercises: () => Promise<Array<Exercise>>
    postExercise: (
        exercise: Partial<ExerciseDetail>
    ) => Promise<Partial<ExerciseDetail>>
    putExercise: (
        exercise: Partial<ExerciseDetail>
    ) => Promise<Partial<ExerciseDetail>>
}

export function exerciseRemoteFrontend(api: ExerciseApi): ExerciseRemote {
    return {
        async getExercise(idOrAlias) {
            const url = api.exercise(idOrAlias)
            const result = await fetch(url).then((res) => res.json())
            return result as ExerciseDetail
        },
        async getExercises() {
            const url = api.exercises()
            const result = await fetch(url).then((res) => res.json())
            return result as Array<Exercise>
        },
        async postExercise() {
            throw new UnknownException()
        },
        async putExercise() {
            throw new UnknownException()
        },
    }
}
