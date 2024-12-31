import { App } from 'firebase-admin/app'
import { getFirestore, Firestore } from 'firebase-admin/firestore'

import {
    firestoreExerciseApi,
    FirestoreExerciseApi,
} from './FirestoreExerciseApi'

let db: Firestore

export function firestore(app: App) {
    try {
        db = getFirestore(app)
    } catch (e) {
        console.error('Firebase.getFirestore', e)
    }

    return {
        firestoreExerciseApi(): FirestoreExerciseApi {
            return firestoreExerciseApi(db)
        },
    }
}

export type { FirestoreExerciseApi }
