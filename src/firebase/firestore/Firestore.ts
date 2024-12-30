import { checkEnvironment } from '@/util'
import { cert, getApp, initializeApp, App } from 'firebase-admin/app'
import { getFirestore, Filter, Firestore } from 'firebase-admin/firestore'

console.warn('Firestore init')
checkEnvironment()

let app: App
try {
    app = getApp()
} catch (e: any) {
    if (!e.message.includes('The default Firebase app does not exist')) {
        console.error('Firestore.getApp', e)
    }
    try {
        app = initializeApp({
            credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT!)),
        })
    } catch (e) {
        console.error('Firestore.getApp.initializeApp', e)
        throw e
    }
}

let db: Firestore
try {
    db = getFirestore(app)
} catch (e) {
    console.error('Firestore.getFirestore', e)
}

export { app, db, Filter }
