import { FieldException } from '../exception/FieldException'

export interface Exercise {
    alias: string
    id: string
    image?: string | null
    title: string
    title_pt_br?: string | null
}

export interface ExerciseDetail extends Exercise {
    description: string
    description_pt_br?: string | null
    video?: string | null
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

export function checkExerciseDetail(
    detail: Partial<ExerciseDetail>
): Partial<ExerciseDetail> {
    if (!detail.alias) {
        throw new FieldException()
    }
    if (!detail.description) {
        throw new FieldException()
    }
    if (!detail.title) {
        throw new FieldException()
    }

    return detail
}
