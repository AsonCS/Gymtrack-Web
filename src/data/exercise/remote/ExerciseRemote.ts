import { Exercise, ExerciseDetail } from '@/model/exercise'

export interface ExerciseRemote {
    getExercise: (alias: string) => Promise<ExerciseDetail>
    getExercises: () => Promise<Array<Exercise>>
    postExercise: (
        exercise: Partial<ExerciseDetail>
    ) => Promise<Partial<ExerciseDetail>>
    putExercise: (
        exercise: Partial<ExerciseDetail>
    ) => Promise<Partial<ExerciseDetail>>
}
