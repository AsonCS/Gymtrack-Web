import {
    firestoreExerciseApi,
    FirestoreExerciseApi,
} from '@/firebase/firestore'
import { toExerciseDetailSource } from '@/model/exercise'

import { ExerciseRemote } from './ExerciseRemote'

export function beExerciseRemoteBackend(
    api: FirestoreExerciseApi = firestoreExerciseApi()
): ExerciseRemote {
    return {
        async getExercise(idOrAlias) {
            return api.getExercise(idOrAlias)
        },
        async getExercises() {
            return api.getExercises()
        },
        async postExercise(exercise) {
            return api.postExercise(toExerciseDetailSource(exercise))
        },
        async putExercise(exercise) {
            return api.postExercise(exercise)
        },
    }
}
