import { Wrapper } from '@/data/_utils/Wrapper'
import { toWorkoutSource, Workout } from '@/model/workout'

export interface WorkoutRemote {
    getWorkouts: () => Promise<Wrapper<Array<Workout>>>
    putWorkout: (workout: Partial<Workout>) => Promise<Wrapper<Workout>>
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
