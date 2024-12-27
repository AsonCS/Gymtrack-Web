import { Wrapper } from '@/data/_utils/Wrapper'
import { Exercise, ExerciseDetail } from '@/model/exercise'

export interface ExerciseRepository {
    getExercises: () => Promise<Wrapper<Array<Exercise>>>
    getExercise: (alias: string) => Promise<Wrapper<ExerciseDetail>>
    postExercise: (
        exercise: Partial<ExerciseDetail>
    ) => Promise<Wrapper<Partial<ExerciseDetail>>>
}
