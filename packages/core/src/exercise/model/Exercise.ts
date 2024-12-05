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
