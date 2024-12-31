import {
    storageRemote,
    StorageRemote,
} from '@/data/storage/remote/StorageRemote'
import { FieldException, toWrapperError } from '@/model/exception'
import { ExerciseDetail } from '@/model/exercise'

import { beExerciseRemote } from '../remote/BEExerciseRemote'
import { ExerciseRemote } from '../remote/ExerciseRemote'
import { ExerciseRepository } from './ExerciseRepository'

export function beExerciseRepository(
    remote: ExerciseRemote = beExerciseRemote(),
    storage: StorageRemote = storageRemote()
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
            const { exercise, ...images } = getExerciseFromFormData(formData)

            try {
                const result = await uploadImages(
                    exercise.alias,
                    images,
                    storage
                )
                if (result.defaultPath) {
                    exercise.imageDefault = result.defaultPath
                }
                if (result.squarePath) {
                    exercise.imageSquare = result.squarePath
                }
            } catch (e: any) {
                console.error(
                    'beExerciseRepository.postExerciseFormData.uploadImages',
                    e
                )
            }

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
            const { exercise, ...images } = getExerciseFromFormData(
                formData,
                alias
            )

            try {
                const result = await uploadImages(
                    exercise.alias,
                    images,
                    storage
                )
                if (result.defaultPath) {
                    exercise.imageDefault = result.defaultPath
                }
                if (result.squarePath) {
                    exercise.imageSquare = result.squarePath
                }
            } catch (e: any) {
                console.error(
                    'beExerciseRepository.putExerciseFormData.uploadImages',
                    e
                )
            }

            return this.putExercise(exercise)
        },
    }
}

function getExerciseFromFormData(
    formData: FormData,
    alias?: string
): {
    exercise: Partial<ExerciseDetail>
    imageDefault?: any
    imageSquare?: any
} {
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

    const imageDefault = formData.get('imageDefault')
    const imageSquare = formData.get('imageSquare')

    return { exercise, imageDefault, imageSquare }
}

async function uploadImages(
    alias: string | undefined,
    images: {
        imageDefault?: any
        imageSquare?: any
    },
    storage: StorageRemote
) {
    if (!alias) {
        throw new FieldException('alias')
    }
    const result: { defaultPath?: string; squarePath?: string } = {}

    if (images.imageDefault) {
        result.defaultPath = await storage.uploadFile(
            alias,
            images.imageDefault,
            'default'
        )
    }

    if (images.imageSquare) {
        result.squarePath = await storage.uploadFile(
            alias,
            images.imageSquare,
            'square'
        )
    }

    return result
}
