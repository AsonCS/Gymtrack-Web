import { Firestore } from 'firebase-admin/firestore'

import { NotFoundException } from '@/model/exception'
import { ExerciseRemote, toExerciseRemote } from '@/model/exercise'
import { HomeAllExercisesDoc } from './model/HomeAllExercisesDoc'

const ALL_EXERCISES = 'all_exercises'
const EXERCISES = 'exercises'
const HOME = 'home'

export interface FirestoreExerciseApi {
    deleteExercise: (alias: string) => Promise<void>
    getExercise: (alias: string) => Promise<ExerciseRemote>
    getExercises: () => Promise<Array<Partial<ExerciseRemote>>>
    getHomeAllExercisesDoc: () => Promise<HomeAllExercisesDoc>
    postExercise: (exercise: Partial<ExerciseRemote>) => Promise<void>
    putExercise: (exercise: Partial<ExerciseRemote>) => Promise<void>
}

export function firestoreExerciseApi(db: Firestore): FirestoreExerciseApi {
    return {
        async deleteExercise(alias: string) {
            await db
                .collection(`${HOME}/${ALL_EXERCISES}/${EXERCISES}`)
                .doc(alias)
                .delete()
        },
        async getExercise(alias: string) {
            const doc = await db
                .collection(`${HOME}/${ALL_EXERCISES}/${EXERCISES}`)
                .doc(alias)
                .get()
            /*
                .where(
                    Filter.or(
                        Filter.where('alias', '==', alias),
                        Filter.where('id', '==', alias)
                    )
                )
                .get()

            if (result.empty) {
                throw new NotFoundException(
                    `${HOME}.${ALL_EXERCISES}.${EXERCISES}.${alias} not found`
                )
            }

            const doc = result.docs[0]
            const data = doc.data()
            */
            const data = doc.data()

            if (!data) {
                throw new NotFoundException(
                    `${HOME}.${ALL_EXERCISES}.${EXERCISES}.${alias} not found`
                )
            }

            return {
                alias: doc.id,
                ...data,
            } as ExerciseRemote
        },
        async getExercises() {
            const collection = await db
                .collection(`${HOME}/${ALL_EXERCISES}/${EXERCISES}`)
                .get()

            const exercises: Partial<ExerciseRemote>[] = []
            collection.forEach((doc) => {
                const data = doc.data()
                exercises.push({
                    alias: doc.id,
                    imageDefault: data.imageDefault,
                    imageSquare: data.imageSquare,
                    title: data.title,
                    titleEs: data.titleEs,
                    titlePt: data.titlePt,
                })
            })

            return exercises
        },
        async getHomeAllExercisesDoc() {
            const doc = await db.collection(HOME).doc(ALL_EXERCISES).get()
            const data = doc.data()

            if (!data) {
                throw new NotFoundException(
                    `${HOME}.${ALL_EXERCISES} not found`
                )
            }

            return {
                title: data.title,
                titlePtBr: data.titlePtBr,
            }
        },
        async postExercise(exercise: Partial<ExerciseRemote>) {
            await db
                .collection(`${HOME}/${ALL_EXERCISES}/${EXERCISES}`)
                .doc(exercise.alias!)
                .set(toExerciseRemote(exercise))
        },
        async putExercise(exercise: Partial<ExerciseRemote>) {
            await db
                .collection(`${HOME}/${ALL_EXERCISES}/${EXERCISES}`)
                .doc(exercise.alias!)
                .update(toExerciseRemote(exercise))
        },
    }
}
