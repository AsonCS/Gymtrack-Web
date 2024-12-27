import Image from 'next/image'
import Link from 'next/link'

import { feExerciseRepository } from '@/data/exercise'

export default async function Home() {
    const exercises = await feExerciseRepository()
        .getExercises()
        .then((response) => {
            if (response.error) {
                console.error(response.error)
            }
            return response.data ?? []
        })
    return (
        <main className="flex justify-center">
            <div className="flex flex-col gap-4 justify-center min-h-screen py-2">
                {exercises.map((exercise) => (
                    <Link
                        className="border-2 border-zinc-700 flex gap-4 items-center justify-start p-2 rounded-xl"
                        href={`/exercises/${exercise.alias}`}
                        key={exercise.alias}
                    >
                        <Image
                            alt="Exercise image"
                            aria-hidden
                            className="rounded-xl"
                            height={128}
                            src={exercise.image ?? '/logo.png'}
                            width={128}
                        />
                        <span className="capitalize font-bold text-xl">
                            {exercise.title}
                        </span>
                    </Link>
                ))}
            </div>
        </main>
    )
}
