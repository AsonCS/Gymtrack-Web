import { ExerciseRemote } from './ExerciseRemote'
import { exerciseApi, ExerciseApi } from '../api/ExerciseApi'

export function feExerciseRemote(
    api: ExerciseApi = exerciseApi()
): ExerciseRemote {
    return {
        async deleteExercise(alias) {
            return api.deleteExercise(alias)
        },
        async getExercise() {
            throw new Error('Not implemented')
        },
        async getExercises() {
            throw new Error('Not implemented')
        },
        async postExercise() {
            throw new Error('Not implemented')
        },
        async postExerciseFormData(formData) {
            return api.postExerciseFormData(formData)
        },
        async putExercise() {
            throw new Error('Not implemented')
        },
        async putExerciseFormData(alias, formData) {
            return api.putExerciseFormData(alias, formData)
        },
    }
}
