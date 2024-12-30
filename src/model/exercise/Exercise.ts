import { FieldException } from '../exception'

export interface Exercise {
    alias: string
    image?: string | null
    title: string
    titleEs?: string | null
    titlePt?: string | null
}

export interface ExerciseDetail extends Exercise {
    description: string
    descriptionEs?: string | null
    descriptionPt?: string | null
    imageDefault?: string | null
    imageSquare?: string | null
    video?: string | null
}

export function toExercise(detail: ExerciseDetail): Exercise {
    return {
        alias: detail.alias,
        image: detail.image,
        title: detail.title,
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
    if (detail.descriptionEs) {
        remote.descriptionEs = detail.descriptionEs
    }
    if (detail.descriptionPt) {
        remote.descriptionPt = detail.descriptionPt
    }
    if (detail.image) {
        remote.image = detail.image
    }
    if (detail.imageDefault) {
        remote.imageDefault = detail.imageDefault
    }
    if (detail.imageSquare) {
        remote.imageSquare = detail.imageSquare
    }
    if (detail.title) {
        remote.title = detail.title
    }
    if (detail.titleEs) {
        remote.titleEs = detail.titleEs
    }
    if (detail.titlePt) {
        remote.titlePt = detail.titlePt
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

    return {
        ...detail,
    }
}
