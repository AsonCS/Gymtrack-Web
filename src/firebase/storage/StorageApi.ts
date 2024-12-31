import { getDownloadURL } from 'firebase-admin/storage'
import { Bucket } from '@google-cloud/storage'

export interface StorageApi {
    uploadFile: (file: any, path: string) => Promise<string>

    test: () => Promise<string>
}

export function storageApi(bucket: Bucket): StorageApi {
    return {
        async uploadFile(file, path) {
            const fileRef = bucket.file(path)
            await fileRef.save(file)
            return await getDownloadURL(fileRef)
        },

        async test() {
            const fileRef = bucket.file('all_exercises/bench_press/default.png')
            return await getDownloadURL(fileRef)
        },
    }
}
