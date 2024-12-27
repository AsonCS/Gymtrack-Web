import { toApiResponseError } from '@/model/exception'

import { beExerciseRemote } from '../remote/BEExerciseRemote'
import { ExerciseRemote } from '../remote/ExerciseRemote'
import { ExerciseRepository } from './ExerciseRepository'

export function beExerciseRepository(
    remote: ExerciseRemote = beExerciseRemote()
): ExerciseRepository {
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
        async getExercise(alias) {
            try {
                const data = await remote.getExercise(alias)
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
