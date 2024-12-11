export interface ExerciseApi {
    exercise: (idOrAlias: string) => string
    exercises: () => string
}

export function exerciseApi(): ExerciseApi {
    return {
        exercise: (idOrAlias) =>
            `${process.env.NEXT_PUBLIC_API_HOST}/exercises/${idOrAlias}`,
        exercises: () => `${process.env.NEXT_PUBLIC_API_HOST}/exercises`,
    }
}
