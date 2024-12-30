import { Metadata } from 'next'

import { beExerciseRepository } from '@/data/backend'
import { ExerciseDetail } from '@/model/exercise'
import { Form } from '@/ui/_components/exercises/alias'
import strings, { capitalize } from '@/ui/_strings'

interface Props {
    params: Promise<{ alias: string }>
}

export const metadata: Metadata = {
    title: null,
    description: null,
}

export default async function Page(props: Props) {
    const alias = (await props.params).alias
    let exercise: ExerciseDetail | undefined = {
        alias: '',
        description: '',
        title: '',
    }
    let description = 'Create a new exercise'
    let title = 'New Exercise'

    if (alias !== 'new') {
        exercise = await beExerciseRepository()
            .getExercise(alias)
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
