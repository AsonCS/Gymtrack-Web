import { getFileExtension, getToken, replaceSlashes } from '@/data'
import { storage, StorageApi } from '@/firebase'
import { ImageType } from '@/model'

const ALL_EXERCISES = 'all_exercises'

export interface StorageRemote {
    uploadFile: (
        alias: string,
        file: File,
        imageType: ImageType
    ) => Promise<string>
}

export function storageRemote(
    api: StorageApi = storage.storageApi()
): StorageRemote {
    return {
        async uploadFile(alias, file, imageType) {
            const ext = getFileExtension(file.name)
            const path = `${ALL_EXERCISES}/${alias}/${imageType}.${ext}`
            const url = await api.uploadFile(await file.bytes(), path)
            return replaceSlashes(`${path}?alt=media&${getToken(url)}`)
        },
    }
}
