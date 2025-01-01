import { toWrapperError } from '@/model/exception'
import { StatusOk } from '@/data'

import { feExerciseRemote } from '../remote/FEExerciseRemote'
import { ExerciseRemote } from '../remote/ExerciseRemote'
import { ExerciseRepository } from './ExerciseRepository'

export function feExerciseRepository(
    remote: ExerciseRemote = feExerciseRemote()
): ExerciseRepository {
    return {
        async deleteExercise(alias) {
            try {
                await remote.deleteExercise(alias)
                return {
                    status: StatusOk,
                }
            } catch (e) {
                return toWrapperError(e)
            }
        },
        async getExercises() {
            throw new Error('Not implemented')
        },
        async getExercise() {
            throw new Error('Not implemented')
        },
        async postExercise() {
            throw new Error('Not implemented')
        },
        async postExerciseFormData(formData) {
            try {
                await remote.postExerciseFormData(formData)
                return {
                    status: StatusOk,
                }
            } catch (e) {
                return toWrapperError(e)
            }
        },
        async putExercise() {
            throw new Error('Not implemented')
        },
        async putExerciseFormData(alias, formData) {
            try {
                await remote.putExerciseFormData(alias, formData)
                return {
                    status: StatusOk,
                }
            } catch (e) {
                return toWrapperError(e)
            }
        },
    }
}
