import {
    Exercise,
    ExerciseDetail,
    ExerciseRemote as _ExerciseRemote,
} from '@/model/exercise'

export interface ExerciseRemote {
    deleteExercise: (alias: string) => Promise<void>
    getExercise: (alias: string, full: boolean) => Promise<ExerciseDetail>
    getExercises: () => Promise<Array<Exercise>>
    postExercise: (exercise: Partial<_ExerciseRemote>) => Promise<Partial<void>>
    postExerciseFormData: (formData: FormData) => Promise<Partial<void>>
    putExercise: (exercise: Partial<_ExerciseRemote>) => Promise<Partial<void>>
    putExerciseFormData: (
        alias: string,
        formData: FormData
    ) => Promise<Partial<void>>
}
