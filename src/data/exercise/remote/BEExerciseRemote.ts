import {
    firestoreExerciseApi,
    FirestoreExerciseApi,
} from '@/firebase/firestore'
import { FieldException } from '@/model/exception'
import { toExerciseDetailSource } from '@/model/exercise'

import { ExerciseRemote } from './ExerciseRemote'

export function beExerciseRemote(
    api: FirestoreExerciseApi = firestoreExerciseApi()
): ExerciseRemote {
    return {
        async deleteExercise(alias) {
            return api.deleteExercise(alias)
        },
        async getExercise(alias) {
            return api.getExercise(alias)
        },
        async getExercises() {
            return api.getExercises()
        },
        async postExercise(exercise) {
            return api.postExercise(toExerciseDetailSource(exercise))
        },
        async putExercise(exercise) {
            if (!exercise.alias) {
                throw new FieldException('alias')
            }
            return api.putExercise(exercise)
        },
    }
}
