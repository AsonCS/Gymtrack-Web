import { ImageType, Lang } from '..'

export interface Exercise {
    alias: string
    image?: string
    title: string
}

export interface ExerciseDetail extends Exercise {
    description: string
    video?: string
}

export interface ExerciseRemote {
    alias: string
    description: string
    descriptionEs?: string
    descriptionPt?: string
    imageDefault?: string
    imageSquare?: string
    title: string
    titleEs?: string
    titlePt?: string
    video?: string
}

export function fromRemoteToExercise(
    imageType: ImageType,
    lang: Lang,
    remote: Partial<ExerciseRemote>
): Exercise {
    return {
        alias: remote.alias!,
        image: fromRemoteToExerciseImage(imageType, remote),
        title: fromRemoteToExerciseTitle(lang, remote),
    }
}

export function fromRemoteToExerciseDetail(
    imageType: ImageType,
    lang: Lang,
    remote: Partial<ExerciseRemote>
): ExerciseDetail {
    return {
        alias: remote.alias!,
        description: fromRemoteToExerciseDescription(lang, remote),
        image: fromRemoteToExerciseImage(imageType, remote),
        title: fromRemoteToExerciseTitle(lang, remote),
        video: remote.video,
    }
}

export function toExerciseRemote(detail: Partial<ExerciseRemote>) {
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

function fromRemoteToExerciseDescription(
    lang: Lang,
    remote: Partial<ExerciseRemote>
): string {
    switch (lang) {
        case 'es':
            return remote.descriptionEs ?? remote.description!
        case 'pt':
            return remote.descriptionPt ?? remote.description!
        default:
            return remote.description!
    }
}

function fromRemoteToExerciseImage(
    imageType: ImageType,
    remote: Partial<ExerciseRemote>
): string | undefined {
    switch (imageType) {
        case 'square':
            return remote.imageSquare ?? remote.imageDefault
        default:
            return remote.imageDefault
    }
}

function fromRemoteToExerciseTitle(
    lang: Lang,
    remote: Partial<ExerciseRemote>
): string {
    switch (lang) {
        case 'es':
            return remote.titleEs ?? remote.title!
        case 'pt':
            return remote.titlePt ?? remote.title!
        default:
            return remote.title!
    }
}
