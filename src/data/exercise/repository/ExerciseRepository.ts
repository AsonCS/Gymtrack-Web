import { Wrapper } from '@/data/_utils/Wrapper'
import { Exercise, ExerciseDetail } from '@/model/exercise'

export interface ExerciseRepository {
    deleteExercise: (alias: string) => Promise<Wrapper<boolean>>
    getExercises: () => Promise<Wrapper<Array<Exercise>>>
    getExercise: (alias: string) => Promise<Wrapper<ExerciseDetail>>
    postExercise: (
        exercise: Partial<ExerciseDetail>
    ) => Promise<Wrapper<Partial<ExerciseDetail>>>
    postExerciseFormData: (
        formData: FormData
    ) => Promise<Wrapper<Partial<ExerciseDetail>>>
    putExercise: (
        exercise: Partial<ExerciseDetail>
    ) => Promise<Wrapper<Partial<ExerciseDetail>>>
    putExerciseFormData: (
        formData: FormData,
        alias?: string
    ) => Promise<Wrapper<Partial<ExerciseDetail>>>
}
