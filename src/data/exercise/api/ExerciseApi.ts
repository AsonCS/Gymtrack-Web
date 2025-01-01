import { StatusOk, Wrapper } from '@/data'

const API = '/api'
const EXERCISES = `${API}/exercises`

export interface ExerciseApi {
    deleteExercise: (alias: string) => Promise<void>
    postExerciseFormData: (formData: FormData) => Promise<Partial<void>>
    putExerciseFormData: (
        alias: string,
        formData: FormData
    ) => Promise<Partial<void>>
}

export function exerciseApi(): ExerciseApi {
    return {
        async deleteExercise(alias) {
            const result = await fetch(`${EXERCISES}/${alias}`, {
                method: 'DELETE',
            }).then(async (res) => (await res.json()) as Wrapper<void>)
            if (result.status !== StatusOk) {
                throw new Error(result.error ?? 'Error')
            }
        },
        async postExerciseFormData(formData) {
            const result = await fetch(`${EXERCISES}`, {
                body: formData,
                method: 'POST',
            }).then(async (res) => (await res.json()) as Wrapper<void>)
            if (result.status !== StatusOk) {
                throw new Error(result.error ?? 'Error')
            }
        },
        async putExerciseFormData(alias, formData) {
            const result = await fetch(`${EXERCISES}/${alias}`, {
                body: formData,
                method: 'PUT',
            }).then(async (res) => (await res.json()) as Wrapper<void>)
            if (result.status !== StatusOk) {
                throw new Error(result.error ?? 'Error')
            }
        },
    }
}
