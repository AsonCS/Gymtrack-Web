import Image from 'next/image'
import Link from 'next/link'

import { beExerciseRepository } from '@/data/backend'
import { getImageUrl } from '@/data'
import { getLang } from '@/model'

interface Props {
    params: Promise<unknown>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Home({ searchParams }: Props) {
    const lang = getLang((await searchParams).lang)

    const exercises = await beExerciseRepository(lang)
        .getExercises()
        .then((response) => {
            if (response.error) {
                console.error(response.error)
            }
            return response.data ?? []
        })
    return (
        <main className="flex justify-center min-h-screen">
            <div className="flex flex-col gap-4 justify-center px-4 py-10 w-full md:w-96">
                <NewExercise />
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
                            src={getImageUrl(exercise.image) ?? '/logo.png'}
                            width={128}
                        />
                        <span className="capitalize font-bold text-xl">
                            {exercise.title}
                        </span>
                    </Link>
                ))}
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
                            src={getImageUrl(exercise.image) ?? '/logo.png'}
                            width={128}
                        />
                        <span className="capitalize font-bold text-xl">
                            {exercise.title}
                        </span>
                    </Link>
                ))}
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
                            src={getImageUrl(exercise.image) ?? '/logo.png'}
                            width={128}
                        />
                        <span className="capitalize font-bold text-xl">
                            {exercise.title}
                        </span>
                    </Link>
                ))}
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
                            src={getImageUrl(exercise.image) ?? '/logo.png'}
                            width={128}
                        />
                        <span className="capitalize font-bold text-xl">
                            {exercise.title}
                        </span>
                    </Link>
                ))}
                <NewExercise />
            </div>
        </main>
    )
}

function NewExercise() {
    return (
        <Link
            className="border-2 border-zinc-700 flex gap-4 items-center justify-center p-2 rounded-xl"
            href={`/exercises/new`}
        >
            <span className="capitalize font-bold text-blue-600 text-xl">
                + New Exercise
            </span>
        </Link>
    )
}
