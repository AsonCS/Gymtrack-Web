import en from './en'
import pt from './pt'

export interface Strings {
    about: About
    exercises: Exercises
}
export interface About {
    dataExclusion: AboutDataExclusion
    privacyPolicy: AboutPrivacyPolicy
}
export interface AboutDataExclusion {
    labelTitle: string
}
export interface AboutPrivacyPolicy {
    labelTitle: string
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

export default function strings(languageTag: string = ''): Strings {
    if (languageTag.includes('en')) return en()

    return pt()
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
