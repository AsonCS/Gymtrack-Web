import en from './en'

export interface Strings {
    exercises: Exercises
}
export interface Exercises {
    alias: ExercisesAlias
}
export interface ExercisesAlias {
    labelAlias: string
    labelButtonSubmit: string
    labelDescription: string
    labelDescriptionEs: string
    labelDescriptionPt: string
    labelImageDefault: string
    labelImageSquare: string
    labelTitle: string
    labelTitleEs: string
    labelTitlePt: string
    labelVideo: string
}

export default function strings(): Strings {
    return en()
}

export function capitalize(str: string): string {
    return str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

export function toAlias(str: string) {
    return str
        .toLowerCase()
        .replace(/[ ]+/g, '_')
        .replace(/[^a-z0-9_]/g, '')
        .replace(/[_]+/g, '_')
        .substring(0, 50)
}

export function toTitle(str: string) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/[ ]+/g, ' ')
        .substring(0, 50)
}
