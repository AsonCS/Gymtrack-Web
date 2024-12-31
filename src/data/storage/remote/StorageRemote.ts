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
            const temp = file.name.split('.')
            const ext = temp[temp.length - 1]
            const path = `${ALL_EXERCISES}/${alias}/${imageType}.${ext}`
            return await api.uploadFile(await file.bytes(), path)
        },
    }
}
