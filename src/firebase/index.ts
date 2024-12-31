import { cert, getApp, initializeApp, App } from 'firebase-admin/app'

import { checkEnvironment } from '@/util'

import { firestore as _firestore, FirestoreExerciseApi } from './firestore'
import { storage as _storage, StorageApi } from './storage'

console.warn('Firebase init')
checkEnvironment()

let app: App
try {
    app = getApp()
} catch (e: any) {
    if (!e.message.includes('The default Firebase app does not exist')) {
        console.error('Firebase.getApp', e)
    }
    try {
        app = initializeApp({
            credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT!)),
        })
    } catch (e) {
        console.error('Firebase.getApp.initializeApp', e)
        throw e
    }
}

const firestore = _firestore(app)
const storage = _storage(app)

export { firestore, storage }
export type { FirestoreExerciseApi, StorageApi }
