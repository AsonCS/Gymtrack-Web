'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { StatusOk, Wrapper } from '@/data'
import { feExerciseRepository } from '@/data/frontend'
import { ExerciseRemote } from '@/model/exercise'

import { File } from './InputImage'

export default function useFormData(exercise: ExerciseRemote) {
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

    async function submit(e: any) {
        e.preventDefault()
        const formData = new FormData()

        formData.append('alias', alias)
        if (description !== exercise.description) {
            formData.append('description', description)
        }
        if (descriptionEs !== exercise.descriptionEs && descriptionEs) {
            formData.append('descriptionEs', descriptionEs)
        }
        if (descriptionPt !== exercise.descriptionPt && descriptionPt) {
            formData.append('descriptionPt', descriptionPt)
        }
        if (imageDefault) {
            formData.append('imageDefault', imageDefault.file)
        }
        if (imageSquare) {
            formData.append('imageSquare', imageSquare.file)
        }
        if (title !== exercise.title) {
            formData.append('title', title)
        }
        if (titleEs !== exercise.titleEs && titleEs) {
            formData.append('titleEs', titleEs)
        }
        if (titlePt !== exercise.titlePt && titlePt) {
            formData.append('titlePt', titlePt)
        }

        const repo = feExerciseRepository()
        let result: Wrapper<void>
        if (exercise.alias !== '') {
            result = await repo.putExerciseFormData(formData)
        } else {
            result = await repo.postExerciseFormData(formData)
        }
        if (result.status === StatusOk) {
            router.replace('/')
        }
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
