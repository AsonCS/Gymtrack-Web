import { toWrapperError } from '@/model/exception'

import { feExerciseRemote } from '../remote/FEExerciseRemote'
import { ExerciseRemote } from '../remote/ExerciseRemote'
import { ExerciseRepository } from './ExerciseRepository'

export function feExerciseRepository(
    remote: ExerciseRemote = feExerciseRemote()
): ExerciseRepository {
    return {
        async getExercises() {
            try {
                const data = await remote.getExercises()
                return {
                    data,
                    status: 200,
                }
            } catch (e) {
                return toWrapperError(e)
            }
        },
        async getExercise(alias) {
            try {
                const data = await remote.getExercise(alias)
                return {
                    data,
                    status: 200,
                }
            } catch (e) {
                return toWrapperError(e)
            }
        },
        async postExercise(exercise) {
            try {
                const data = await remote.postExercise(exercise)
                return {
                    data,
                    status: 200,
                }
            } catch (e) {
                return toWrapperError(e)
            }
        },
    }
}
