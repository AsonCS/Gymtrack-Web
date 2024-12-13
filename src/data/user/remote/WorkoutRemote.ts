import { ApiResponse } from '@/data/ApiResponse'
import { toWorkoutSource, Workout } from '@/model/workout'

export interface WorkoutRemote {
    getWorkouts: () => Promise<ApiResponse<Array<Workout>>>
    putWorkout: (workout: Partial<Workout>) => Promise<ApiResponse<Workout>>
}

export function workoutRemoteBackend(): WorkoutRemote {
    const mockWorkouts: Workout[] =
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('../../../../mock/user/workouts').mockWorkouts
    return {
        async getWorkouts() {
            return {
                data: mockWorkouts,
                status: 200,
            }
        },
        async putWorkout(workout) {
            const source = toWorkoutSource(workout)
            source.id = new Date().getTime().toString(16)
            mockWorkouts.push(source as Workout)
            return {
                data: source as Workout,
                status: 200,
            }
        },
    }
}
