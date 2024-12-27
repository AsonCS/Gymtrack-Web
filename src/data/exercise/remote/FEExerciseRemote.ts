import { ExerciseRemote } from './ExerciseRemote'
import { exerciseApi, ExerciseApi } from '../api/ExerciseApi'

export function feExerciseRemote(
    api: ExerciseApi = exerciseApi()
): ExerciseRemote {
    return {
        async getExercise(alias) {
            return api.getExercise(alias)
        },
        async getExercises() {
            return api.getExercises()
        },
        async postExercise() {
            throw new Error('Not implemented')
            //return api.postExercise(toExerciseDetailSource(exercise))
        },
        async putExercise() {
            throw new Error('Not implemented')
            //return api.postExercise(exercise)
        },
    }
}
