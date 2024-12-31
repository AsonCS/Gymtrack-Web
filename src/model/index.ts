export type ImageType = 'default' | 'square'

export type Lang = '' | 'es' | 'pt'
export function getLang(source: any): Lang {
    if (source === 'es') {
        return 'es'
    }
    if (source === 'pt') {
        return 'pt'
    }

    return ''
}
