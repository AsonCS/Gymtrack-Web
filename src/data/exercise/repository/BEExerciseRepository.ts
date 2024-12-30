import { toWrapperError } from '@/model/exception'
import { ExerciseDetail } from '@/model/exercise'

import { beExerciseRemote } from '../remote/BEExerciseRemote'
import { ExerciseRemote } from '../remote/ExerciseRemote'
import { ExerciseRepository } from './ExerciseRepository'

export function beExerciseRepository(
    remote: ExerciseRemote = beExerciseRemote()
): ExerciseRepository {
    return {
        async deleteExercise(alias) {
            try {
                const data = await remote.deleteExercise(alias)
                return {
                    data,
                    status: 200,
                }
            } catch (e: any) {
                return toWrapperError(e)
            }
        },
        async getExercises() {
            try {
                const data = await remote.getExercises()
                return {
                    data,
                    status: 200,
                }
            } catch (e: any) {
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
            } catch (e: any) {
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
            } catch (e: any) {
                return toWrapperError(e)
            }
        },
        async postExerciseFormData(formData) {
            const exercise = getExerciseFromFormData(formData)
            return this.postExercise(exercise)
        },
        async putExercise(exercise) {
            try {
                const data = await remote.putExercise(exercise)
                return {
                    data,
                    status: 200,
                }
            } catch (e: any) {
                return toWrapperError(e)
            }
        },
        async putExerciseFormData(formData, alias) {
            const exercise = getExerciseFromFormData(formData, alias)
            return this.putExercise(exercise)
        },
    }
}

function getExerciseFromFormData(
    formData: FormData,
    alias?: string
): Partial<ExerciseDetail> {
    const exercise: Partial<ExerciseDetail> = {
        alias: alias ?? formData.get('alias')?.toString(),
    }

    const description = formData.get('description')?.toString()
    if (description) exercise.description = description
    const descriptionEs = formData.get('descriptionEs')?.toString()
    if (descriptionEs) exercise.descriptionEs = descriptionEs
    const descriptionPt = formData.get('descriptionPt')?.toString()
    if (descriptionPt) exercise.descriptionPt = descriptionPt

    const title = formData.get('title')?.toString()
    if (title) exercise.title = title
    const titleEs = formData.get('titleEs')?.toString()
    if (titleEs) exercise.titleEs = titleEs
    const titlePt = formData.get('titlePt')?.toString()
    if (titlePt) exercise.titlePt = titlePt

    return exercise
}
