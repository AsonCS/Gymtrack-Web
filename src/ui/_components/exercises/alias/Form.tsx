'use client'

import { useRouter } from 'next/navigation'

import { ExercisesAlias, toAlias, toTitle } from '@/ui/_strings'
import { ExerciseDetail } from '@/model/exercise'

import { InputText, Label, Textarea, width } from '.'
import InputImage from './InputImage'
import useFormData from './useFormData'
import { Wrapper } from '@/data/_utils/Wrapper'

export interface Props {
    exercise: ExerciseDetail
    strings: ExercisesAlias
}

export function Form({ exercise, strings }: Props) {
    const router = useRouter()

    const data = useFormData(exercise)

    return (
        <form
            action="#"
            className="flex flex-col gap-2 items-center min-h-screen justify-center p-10"
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

            <Label label={strings.labelDescription}>
                <Textarea
                    onChange={(text) => {
                        data.setDescription(text)
                    }}
                    required={true}
                    text={data.description}
                />
            </Label>
            <Label label={strings.labelDescriptionEs}>
                <Textarea
                    onChange={(text) => {
                        data.setDescriptionEs(text)
                    }}
                    text={data.descriptionEs}
                />
            </Label>
            <Label label={strings.labelDescriptionPt}>
                <Textarea
                    onChange={(text) => {
                        data.setDescriptionPt(text)
                    }}
                    text={data.descriptionPt}
                />
            </Label>

            <InputImage
                height={144}
                image={exercise.imageDefault}
                label={strings.labelImageDefault}
                onChange={data.setImageDefault}
                strings={strings}
            />

            <InputImage
                height={width}
                image={exercise.imageSquare}
                label={strings.labelImageSquare}
                onChange={data.setImageSquare}
                strings={strings}
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
                    fetch(`/api/exercises/${exercise.alias}`, {
                        method: 'DELETE',
                    })
                        .then(
                            async (response) =>
                                (await response.json()) as Wrapper<unknown>
                        )
                        .then((response) => {
                            if (response.status === 200) {
                                router.replace('/')
                            }
                        })
                }}
            >
                Delete
            </button>
        </form>
    )
}
