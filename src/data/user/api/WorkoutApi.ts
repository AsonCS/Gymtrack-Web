export interface WorkoutApi {
    workouts: () => string
}

export function workoutApi(): WorkoutApi {
    return {
        workouts: () => `${process.env.NEXT_PUBLIC_API_HOST}/user/workouts`,
    }
}
