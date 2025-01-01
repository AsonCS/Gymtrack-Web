'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { getImageUrl, StatusOk } from '@/data'
import { feExerciseRepository } from '@/data/frontend'
import { ExerciseRemote } from '@/model/exercise'
import { ExercisesAlias, toAlias, toTitle } from '@/ui/_strings'

import { InputText, Label, Textarea } from '.'
import InputImage from './InputImage'
import useFormData from './useFormData'

export interface Props {
    exercise: ExerciseRemote
    strings: ExercisesAlias
}

export function Form({ exercise, strings }: Props) {
    const router = useRouter()
    const [descriptionExpanded, setDescriptionExpanded] = useState(false)
    const [descriptionExpandedEs, setDescriptionExpandedEs] = useState(false)
    const [descriptionExpandedPt, setDescriptionExpandedPt] = useState(false)

    const data = useFormData(exercise)

    return (
        <main className="flex justify-center min-h-screen">
            <form
                action="#"
                className="flex flex-col gap-2 items-center justify-center px-4 py-10 w-full md:w-96"
                onSubmit={data.submit}
            >
                <Label label={strings.labelAlias}>
                    <InputText
                        onChange={(text) => {
                            data.setAlias(toAlias(text))
                        }}
                        readOnly={exercise.alias !== ''}
                        required={true}
                        text={data.alias}
                    />
                </Label>
                <Label label={strings.labelTitle}>
                    <InputText
                        onChange={(text) => {
                            data.setTitle(toTitle(text))
                        }}
                        required={true}
                        text={data.title}
                    />
                </Label>
                <Label label={strings.labelTitleEs}>
                    <InputText
                        onChange={(text) => {
                            data.setTitleEs(toTitle(text))
                        }}
                        text={data.titleEs}
                    />
                </Label>
                <Label label={strings.labelTitlePt}>
                    <InputText
                        onChange={(text) => {
                            data.setTitlePt(toTitle(text))
                        }}
                        text={data.titlePt}
                    />
                </Label>

                <Label
                    label={strings.labelDescription}
                    onClick={() => setDescriptionExpanded(!descriptionExpanded)}
                >
                    {descriptionExpanded ? (
                        <Textarea
                            onChange={(text) => {
                                data.setDescription(text)
                            }}
                            required={true}
                            text={data.description}
                        />
                    ) : (
                        <></>
                    )}
                </Label>
                <Label
                    label={strings.labelDescriptionEs}
                    onClick={() =>
                        setDescriptionExpandedEs(!descriptionExpandedEs)
                    }
                >
                    {descriptionExpandedEs ? (
                        <Textarea
                            onChange={(text) => {
                                data.setDescriptionEs(text)
                            }}
                            text={data.descriptionEs}
                        />
                    ) : (
                        <></>
                    )}
                </Label>
                <Label
                    label={strings.labelDescriptionPt}
                    onClick={() =>
                        setDescriptionExpandedPt(!descriptionExpandedPt)
                    }
                >
                    {descriptionExpandedPt ? (
                        <Textarea
                            onChange={(text) => {
                                data.setDescriptionPt(text)
                            }}
                            text={data.descriptionPt}
                        />
                    ) : (
                        <></>
                    )}
                </Label>

                <InputImage
                    height={360 * 0.5625}
                    image={getImageUrl(exercise.imageDefault)}
                    label={strings.labelImageDefault}
                    onChange={data.setImageDefault}
                    strings={strings}
                    width={360}
                />

                <InputImage
                    height={360}
                    image={getImageUrl(exercise.imageSquare)}
                    label={strings.labelImageSquare}
                    onChange={data.setImageSquare}
                    strings={strings}
                    width={360}
                />

                <Label label={strings.labelVideo}></Label>

                <button
                    className="bg-white p-2 rounded-xl text-black"
                    type="submit"
                >
                    {strings.labelButtonSubmit}
                </button>
                <button
                    className="bg-white p-2 rounded-xl text-black"
                    onClick={(e) => {
                        e.preventDefault()
                        feExerciseRepository()
                            .deleteExercise(exercise.alias)
                            .then((result) => {
                                if (result.status === StatusOk) {
                                    router.replace('/')
                                }
                            })
                    }}
                >
                    Delete
                </button>
            </form>
        </main>
    )
}
