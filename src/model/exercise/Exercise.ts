import { FieldException } from '../exception'

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

export function toExerciseDetailRemote(detail: Partial<ExerciseDetail>) {
    const remote: any = {}
    if (detail.alias) {
        remote.alias = detail.alias
    }
    if (detail.description) {
        remote.description = detail.description
    }
    if (detail.description_pt_br) {
        remote.description_pt_br = detail.description_pt_br
    }
    if (detail.image) {
        remote.image = detail.image
    }
    if (detail.title) {
        remote.title = detail.title
    }
    if (detail.title_pt_br) {
        remote.title_pt_br = detail.title_pt_br
    }
    if (detail.video) {
        remote.video = detail.video
    }
    return remote
}

export function toExerciseDetailSource(
    detail: Partial<ExerciseDetail>
): Partial<ExerciseDetail> {
    if (!detail.alias) {
        throw new FieldException('alias')
    }
    if (!detail.description) {
        throw new FieldException('description')
    }
    if (!detail.title) {
        throw new FieldException('title')
    }
    delete detail.id

    return {
        ...detail,
    }
}
