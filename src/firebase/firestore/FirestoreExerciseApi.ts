import {
    Exercise,
    ExerciseDetail,
    toExerciseDetailRemote,
} from '@/model/exercise'

import { db, Filter } from './'
import { HomeAllExercisesDoc } from './model/HomeAllExercisesDoc'
import { NotFoundException } from '@/model/exception'

const ALL_EXERCISES = 'all_exercises'
const EXERCISES = 'exercises'
const HOME = 'home'

export interface FirestoreExerciseApi {
    getExercise: (idOrAlias: string) => Promise<ExerciseDetail>
    getExercises: () => Promise<Array<Exercise>>
    getHomeAllExercisesDoc: () => Promise<HomeAllExercisesDoc>
    postExercise: (
        exercise: Partial<ExerciseDetail>
    ) => Promise<Partial<ExerciseDetail>>
}

export function firestoreExerciseApi(): FirestoreExerciseApi {
    return {
        async getExercise(idOrAlias: string) {
            const result = await db
                .collection(`${HOME}/${ALL_EXERCISES}/${EXERCISES}`)
                .where(
                    Filter.or(
                        Filter.where('alias', '==', idOrAlias),
                        Filter.where('id', '==', idOrAlias)
                    )
                )
                .get()

            if (result.empty) {
                throw new NotFoundException(
                    `${HOME}.${ALL_EXERCISES}.${EXERCISES}.${idOrAlias} not found`
                )
            }

            const doc = result.docs[0]
            const data = doc.data()

            return {
                alias: data.alias,
                description: data.description,
                description_pt_br: data.description_pt_br,
                id: doc.id,
                image: data.image,
                title: data.title,
                title_pt_br: data.title_pt_br,
                video: data.video,
            }
        },
        async getExercises() {
            console.log('firestoreExerciseApi')
            const collection = await db
                .collection(`${HOME}/${ALL_EXERCISES}/${EXERCISES}`)
                .get()

            console.log('collection')

            const exercises: Exercise[] = []
            collection.forEach((doc) => {
                const data = doc.data()
                exercises.push({
                    alias: data.alias,
                    id: doc.id,
                    image: data.image,
                    title: data.title,
                    title_pt_br: data.title_pt_br,
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
                title_pt_br: data.title_pt_br,
            }
        },
        async postExercise(exercise: Partial<ExerciseDetail>) {
            if (exercise.id) {
                await db
                    .collection(`${HOME}/${ALL_EXERCISES}/${EXERCISES}`)
                    .doc(exercise.id)
                    .update(toExerciseDetailRemote(exercise))

                return exercise
            } else {
                const result = await db
                    .collection(`${HOME}/${ALL_EXERCISES}/${EXERCISES}`)
                    .add(toExerciseDetailRemote(exercise))

                return {
                    ...exercise,
                    id: result.id,
                }
            }
        },
    }
}
