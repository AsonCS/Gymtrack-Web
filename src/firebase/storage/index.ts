import { App } from 'firebase-admin/app'
import { getStorage } from 'firebase-admin/storage'
import { Bucket } from '@google-cloud/storage'

import { storageApi, StorageApi } from './StorageApi'

let bucket: Bucket

export function storage(app: App) {
    try {
        bucket = getStorage(app).bucket(process.env.FIREBASE_STORAGE_BUCKET)
    } catch (e) {
        console.error('Firebase.getStorage', e)
    }

    return {
        storageApi(): StorageApi {
            return storageApi(bucket)
        },
    }
}

export type { StorageApi }
