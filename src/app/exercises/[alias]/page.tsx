import Image from 'next/image'

import { feExerciseRepository } from '@/data/exercise'

export default async function Page({
    params,
}: {
    params: Promise<{ alias: string }>
}) {
    const alias = (await params).alias
    const exercise = await feExerciseRepository()
        .getExercise(alias)
        .then((response) => {
            if (response.error) {
                console.error(response.error)
            }
            return response.data
        })

    if (!exercise) {
        return <h1>Exercise not found</h1>
    }

    return (
        <div>
            <h1>{exercise.title}</h1>
            <Image
                alt="Exercise image"
                aria-hidden
                className="rounded-xl"
                height={128}
                src={exercise.image ?? '/logo.png'}
                width={128}
            />
            <p>{exercise.description}</p>
        </div>
    )
}
