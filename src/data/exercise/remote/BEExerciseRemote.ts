import { firestore, FirestoreExerciseApi } from '@/firebase'
import { Lang } from '@/model'
import { FieldException } from '@/model/exception'
import {
    fromRemoteToExercise,
    fromRemoteToExerciseDetail,
} from '@/model/exercise'

import { ExerciseRemote } from './ExerciseRemote'

export function beExerciseRemote(
    lang: Lang,
    api: FirestoreExerciseApi = firestore.firestoreExerciseApi()
): ExerciseRemote {
    return {
        async deleteExercise(alias) {
            await api.deleteExercise(alias)
        },
        async getExercise(alias, full) {
            return await api.getExercise(alias).then((result) => {
                if (full) {
                    return result
                } else {
                    return fromRemoteToExerciseDetail('default', lang, result)
                }
            })
        },
        async getExercises() {
            return await api
                .getExercises()
                .then((result) =>
                    result.map((remote) =>
                        fromRemoteToExercise('square', lang, remote)
                    )
                )
        },
        async postExercise(exercise) {
            if (!exercise.alias) {
                throw new FieldException('alias')
            }
            if (!exercise.description) {
                throw new FieldException('description')
            }
            if (!exercise.title) {
                throw new FieldException('title')
            }

            await api.postExercise(exercise)
        },
        async postExerciseFormData() {
            throw new Error('Not implemented')
        },
        async putExercise(exercise) {
            if (!exercise.alias) {
                throw new FieldException('alias')
            }

            await api.putExercise(exercise)
        },
        async putExerciseFormData() {
            throw new Error('Not implemented')
        },
    }
}
