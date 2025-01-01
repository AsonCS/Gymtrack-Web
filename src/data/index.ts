export * from './_utils/Wrapper'

export function getImageUrl(path?: string): string | undefined {
    const base = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_URL
    if (!base || !path) {
        return undefined
    }
    return `${base}/${path}`
}

export function getFileExtension(name: string): string {
    const temp = name.split('.')
    return temp[temp.length - 1]
}

export function getToken(url: string): string {
    return (url.match(/(token=)[a-zA-Z0-9\-]+/g) ?? [])[0] ?? ''
}

export function replaceSlashes(path: string) {
    return path.replaceAll('/', '%2F')
}
