import { ApiResponse } from '@/data/ApiResponse'
import { toApiResponseError } from '@/model/exception'
import { Exercise, ExerciseDetail } from '@/model/exercise'

import { ExerciseRemote } from '../remote/ExerciseRemote'
import { beExerciseRemoteBackend } from '../remote/BEExerciseRemote'

export interface BEExerciseRepository {
    getExercises: () => Promise<ApiResponse<Array<Exercise>>>
    getExercise: (idOrAlias: string) => Promise<ApiResponse<Exercise>>
    postExercise: (
        exercise: Partial<ExerciseDetail>
    ) => Promise<ApiResponse<Partial<ExerciseDetail>>>
}

export function beExerciseRepository(
    remote: ExerciseRemote = beExerciseRemoteBackend()
): BEExerciseRepository {
    return {
        async getExercises() {
            try {
                const data = await remote.getExercises()
                return {
                    data,
                    status: 200,
                }
            } catch (e: any) {
                return toApiResponseError(e)
            }
        },
        async getExercise(idOrAlias) {
            try {
                const data = await remote.getExercise(idOrAlias)
                return {
                    data,
                    status: 200,
                }
            } catch (e: any) {
                return toApiResponseError(e)
            }
        },
        async postExercise(exercise) {
            try {
                const data = await remote.postExercise(exercise)
                return {
                    data,
                    status: 200,
                }
            } catch (e: any) {
                return toApiResponseError(e)
            }
        },
    }
}
