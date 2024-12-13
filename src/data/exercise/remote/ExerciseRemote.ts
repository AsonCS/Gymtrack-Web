import { ApiResponse } from '@/data/ApiResponse'
import {
    Exercise,
    ExerciseDetail,
    toExercise,
    toExerciseDetailSource,
} from '@/model/exercise'

import { ExerciseApi } from '../api/ExerciseApi'

export interface ExerciseRemote {
    getExercise: (idOrAlias: string) => Promise<ApiResponse<ExerciseDetail>>
    getExercises: () => Promise<ApiResponse<Array<Exercise>>>
    putExercise: (
        exercise: Partial<ExerciseDetail>
    ) => Promise<ApiResponse<ExerciseDetail>>
}

export function exerciseRemoteBackend(): ExerciseRemote {
    const mockExercises: ExerciseDetail[] =
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('../../../../mock/exercises').mockExercises
    return {
        async getExercise(idOrAlias) {
            return {
                data: mockExercises.find(
                    (e) => e.id === idOrAlias || e.alias === idOrAlias
                ),
                status: 200,
            }
        },
        async getExercises() {
            return {
                data: mockExercises.map((e) => toExercise(e)),
                status: 200,
            }
        },
        async putExercise(exercise) {
            const source = toExerciseDetailSource(exercise)
            source.id = new Date().getTime().toString(16)
            mockExercises.push(source as ExerciseDetail)

            return {
                data: source as ExerciseDetail,
                status: 200,
            }
        },
    }
}

export function exerciseRemoteFrontend(api: ExerciseApi): ExerciseRemote {
    return {
        async getExercise(idOrAlias) {
            const url = api.exercise(idOrAlias)
            const result = await fetch(url).then((res) => res.json())
            return result as ApiResponse<ExerciseDetail>
        },
        async getExercises() {
            const url = api.exercises()
            const result = await fetch(url).then((res) => res.json())
            return result as ApiResponse<Array<Exercise>>
        },
        async putExercise() {
            return {
                error: 'Not implemented',
                status: 200,
            }
        },
    }
}
