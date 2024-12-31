import { Firestore } from 'firebase-admin/firestore'

import { NotFoundException } from '@/model/exception'
import {
    Exercise,
    ExerciseDetail,
    toExerciseDetailRemote,
} from '@/model/exercise'
import { HomeAllExercisesDoc } from './model/HomeAllExercisesDoc'

const ALL_EXERCISES = 'all_exercises'
const EXERCISES = 'exercises'
const HOME = 'home'

export interface FirestoreExerciseApi {
    deleteExercise: (alias: string) => Promise<boolean>
    getExercise: (alias: string) => Promise<ExerciseDetail>
    getExercises: () => Promise<Array<Exercise>>
    getHomeAllExercisesDoc: () => Promise<HomeAllExercisesDoc>
    postExercise: (
        exercise: Partial<ExerciseDetail>
    ) => Promise<Partial<ExerciseDetail>>
    putExercise: (
        exercise: Partial<ExerciseDetail>
    ) => Promise<Partial<ExerciseDetail>>
}

export function firestoreExerciseApi(db: Firestore): FirestoreExerciseApi {
    return {
        async deleteExercise(alias: string) {
            await db
                .collection(`${HOME}/${ALL_EXERCISES}/${EXERCISES}`)
                .doc(alias)
                .delete()

            return true
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
            } as ExerciseDetail
        },
        async getExercises() {
            const collection = await db
                .collection(`${HOME}/${ALL_EXERCISES}/${EXERCISES}`)
                .get()

            const exercises: Exercise[] = []
            collection.forEach((doc) => {
                const data = doc.data()
                exercises.push({
                    alias: doc.id,
                    image: data.squarePath ?? data.imageDefault,
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
        async postExercise(exercise: Partial<ExerciseDetail>) {
            await db
                .collection(`${HOME}/${ALL_EXERCISES}/${EXERCISES}`)
                .doc(exercise.alias!)
                .set(toExerciseDetailRemote(exercise))

            return exercise
        },
        async putExercise(exercise: Partial<ExerciseDetail>) {
            await db
                .collection(`${HOME}/${ALL_EXERCISES}/${EXERCISES}`)
                .doc(exercise.alias!)
                .update(toExerciseDetailRemote(exercise))

            return exercise
        },
    }
}
