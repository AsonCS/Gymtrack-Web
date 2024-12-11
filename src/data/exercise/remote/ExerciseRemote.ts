import { mockExercises } from '@/../mock/exercises'

import { ApiResponse } from '@/data/ApiResponse'
import { Exercise, ExerciseDetail, toExercise } from '@/model/exercise'

import { ExerciseApi } from '../api/ExerciseApi'

export interface ExerciseRemote {
    getExercise: (idOrAlias: string) => Promise<ApiResponse<ExerciseDetail>>
    getExercises: () => Promise<ApiResponse<Array<Exercise>>>
}

export function exerciseRemoteBackend(): ExerciseRemote {
    return {
        getExercise: async (idOrAlias) => {
            return {
                data: mockExercises.find(
                    (e) => e.id === idOrAlias || e.alias === idOrAlias
                ),
            }
        },
        async getExercises() {
            return {
                data: mockExercises.map((e) => toExercise(e)),
            }
        },
    }
}

export function exerciseRemoteFrontend(api: ExerciseApi): ExerciseRemote {
    return {
        getExercise: async (idOrAlias) => {
            const url = api.exercise(idOrAlias)
            const result = await fetch(url).then((res) => res.json())
            return result as ApiResponse<ExerciseDetail>
        },
        getExercises: async () => {
            const url = api.exercises()
            const result = await fetch(url).then((res) => res.json())
            return result as ApiResponse<Array<Exercise>>
        },
    }
}
