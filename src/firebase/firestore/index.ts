import { getApp, initializeApp, cert, App } from 'firebase-admin/app'
import { getFirestore, Filter } from 'firebase-admin/firestore'

export * from './FirestoreExerciseApi'

let app: App
try {
    app = getApp()
} catch {
    app = initializeApp({
        credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT!)),
    })
}

const db = getFirestore(app)

export { app, db, Filter }
