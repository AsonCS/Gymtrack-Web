'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { Wrapper } from '@/data/_utils/Wrapper'
import { ExerciseDetail } from '@/model/exercise'

import { File } from './InputImage'

export default function useFormData(exercise: ExerciseDetail) {
    const router = useRouter()

    const [alias, setAlias] = useState(exercise.alias)
    const [description, setDescription] = useState(exercise.description)
    const [descriptionEs, setDescriptionEs] = useState(exercise.descriptionEs)
    const [descriptionPt, setDescriptionPt] = useState(exercise.descriptionPt)
    const [imageDefault, setImageDefault] = useState<File | null>(null)
    const [imageSquare, setImageSquare] = useState<File | null>(null)
    const [title, setTitle] = useState(exercise.title)
    const [titleEs, setTitleEs] = useState(exercise.titleEs)
    const [titlePt, setTitlePt] = useState(exercise.titlePt)

    function submit(e: any) {
        e.preventDefault()
        const formData = new FormData()

        formData.append('alias', alias)
        formData.append('description', description)
        if (descriptionEs) {
            formData.append('descriptionEs', descriptionEs)
        }
        if (descriptionPt) {
            formData.append('descriptionPt', descriptionPt)
        }
        if (imageDefault) {
            formData.append('imageDefault', imageDefault.file)
        }
        if (imageSquare) {
            formData.append('imageSquare', imageSquare.file)
        }
        formData.append('title', title)
        if (titleEs) {
            formData.append('titleEs', titleEs)
        }
        if (titlePt) {
            formData.append('titlePt', titlePt)
        }

        const path = exercise.alias !== '' ? `/${exercise.alias}` : ''
        fetch(`/api/exercises${path}`, {
            body: formData,
            method: exercise.alias !== '' ? 'PUT' : 'POST',
        })
            .then(
                async (response) => (await response.json()) as Wrapper<unknown>
            )
            .then((response) => {
                if (response.status === 200) {
                    router.replace('/')
                }
            })
    }

    return {
        alias,
        setAlias,
        description,
        setDescription,
        descriptionEs,
        setDescriptionEs,
        descriptionPt,
        setDescriptionPt,
        imageDefault,
        setImageDefault,
        imageSquare,
        setImageSquare,
        title,
        setTitle,
        titleEs,
        setTitleEs,
        titlePt,
        setTitlePt,
        submit,
    }
}
