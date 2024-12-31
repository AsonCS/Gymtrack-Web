import { Metadata } from 'next'

import { beExerciseRepository } from '@/data/backend'
import { ExerciseRemote } from '@/model/exercise'
import { Form } from '@/ui/_components/exercises/alias'
import strings, { capitalize } from '@/ui/_strings'

interface Props {
    params: Promise<{ alias: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const metadata: Metadata = {
    title: null,
    description: null,
}

export default async function ExercisesAlias({ params }: Props) {
    const alias = (await params).alias

    let exercise: ExerciseRemote | undefined = {
        alias: '',
        description: '',
        title: '',
    }
    let description = 'Create a new exercise'
    let title = 'New Exercise'

    if (alias !== 'new') {
        exercise = await beExerciseRepository()
            .getExercise(alias, true)
            .then((response) => {
                if (response.error) {
                    console.error(response.error)
                }
                return response.data
            })
        if (exercise) {
            description = exercise.description
            title = exercise.title
        }
    }

    if (!exercise) {
        return <h1>Exercise not found</h1>
    }

    const str = strings().exercises.alias
    return (
        <>
            <title>{capitalize(title)}</title>
            <meta name="description" content={description} />
            <main>
                <Form exercise={exercise} strings={str} />
            </main>
        </>
    )
}
