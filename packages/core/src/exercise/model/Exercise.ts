export interface Exercise {
    alias: string
    id: string
    image?: string
    title: string
    title_pt_br?: string
}

export interface ExerciseDetail extends Exercise {
    description: string
    description_pt_br?: string
    video?: string
}

export function toExercise(detail: ExerciseDetail): Exercise {
    return {
        alias: detail.alias,
        id: detail.id,
        image: detail.image,
        title: detail.title,
        title_pt_br: detail.title_pt_br,
    }
}
