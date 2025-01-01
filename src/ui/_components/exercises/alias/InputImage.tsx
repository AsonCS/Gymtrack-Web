'use client'

import Image from 'next/image'

import { ExercisesAlias } from '@/ui/_strings'

import { Label } from '.'
import { useState } from 'react'

export interface File {
    file: any
    name: string
    size: string
    sizeKb: number
    type: string
}

export default function InputImage(props: {
    height: number
    image: string | null | undefined
    label: string
    onChange: (file: File) => void
    strings: ExercisesAlias
    width: number
}) {
    const [src, setSrc] = useState(props.image)

    return (
        <Label label={props.label}>
            <Image
                alt="Exercise image"
                aria-hidden
                className="rounded-xl w-full"
                height={props.height}
                src={src ?? '/logo.png'}
                width={props.width}
            />
            <input
                accept="image/png, image/jpeg"
                onChange={(e) => {
                    const file = e.target.files![0]
                    const fileName = file.name
                    const fileSize = getFileSize(file.size)
                    const fileSizeKb = getFileSizeKb(file.size)
                    const fileType = getFileType(file).toLowerCase()

                    const reader = new FileReader()
                    reader.onload = (e) => {
                        setSrc(e.target?.result as string)
                        const result: File = {
                            file: file,
                            name: fileName,
                            size: fileSize,
                            sizeKb: fileSizeKb,
                            type: fileType,
                        }
                        console.log(result)
                        props.onChange(result)
                    }
                    reader.readAsDataURL(file)
                }}
                type="file"
            />
        </Label>
    )
}

const getFileSize = (fileSize: number) => {
    if (fileSize / 1024 >= 1024) {
        return Math.floor(fileSize / 1024 / 1024) + ' MB'
    } else {
        return Math.floor(fileSize / 1024) + ' KB'
    }
}

const getFileSizeKb = (fileSize: number) => {
    return Math.floor(fileSize / 1024)
}

const getFileType = (file: any) => {
    return file?.type.split('/').pop()
}
