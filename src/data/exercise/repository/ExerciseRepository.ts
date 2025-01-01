import { Wrapper } from '@/data'
import { Exercise, ExerciseDetail, ExerciseRemote } from '@/model/exercise'

export interface ExerciseRepository {
    deleteExercise: (alias: string) => Promise<Wrapper<void>>
    getExercises: () => Promise<Wrapper<Array<Exercise>>>
    getExercise: (
        alias: string,
        full: boolean
    ) => Promise<Wrapper<ExerciseDetail>>
    postExercise: (exercise: Partial<ExerciseRemote>) => Promise<Wrapper<void>>
    postExerciseFormData: (formData: FormData) => Promise<Wrapper<void>>
    putExercise: (exercise: Partial<ExerciseRemote>) => Promise<Wrapper<void>>
    putExerciseFormData: (
        alias: string,
        formData: FormData
    ) => Promise<Wrapper<void>>
}
