import { StatusOk, Wrapper } from '@/data'
import { toWorkoutSource, Workout } from '@/model/workout'

export interface WorkoutRemote {
    getWorkouts: () => Promise<Wrapper<Array<Workout>>>
    putWorkout: (workout: Partial<Workout>) => Promise<Wrapper<Workout>>
}

export function workoutRemoteBackend(): WorkoutRemote {
    const mockWorkouts: Workout[] = []
    return {
        async getWorkouts() {
            return {
                data: mockWorkouts,
                status: StatusOk,
            }
        },
        async putWorkout(workout) {
            const source = toWorkoutSource(workout)
            source.id = new Date().getTime().toString(16)
            mockWorkouts.push(source as Workout)
            return {
                data: source as Workout,
                status: StatusOk,
            }
        },
    }
}
