import { NextRequest, NextResponse } from 'next/server'

import { toNextResponse } from '@/data/_utils/Wrapper'
import { beExerciseRepository } from '@/data/backend'

export async function DELETE(
    _: NextRequest,
    { params }: { params: Promise<{ alias: string }> }
) {
    const alias = (await params).alias

    const remote = beExerciseRepository()
    const [data, init] = toNextResponse(await remote.deleteExercise(alias))
    return NextResponse.json(data, init)
}

export async function GET(
    _: NextRequest,
    { params }: { params: Promise<{ alias: string }> }
) {
    const alias = (await params).alias

    const remote = beExerciseRepository()
    const [data, init] = toNextResponse(await remote.getExercise(alias))
    return NextResponse.json(data, init)
}

export async function PUT(
    req: NextRequest,
    { params }: { params: Promise<{ alias: string }> }
) {
    const alias = (await params).alias
    const formData = await req.formData()

    const remote = beExerciseRepository()
    const [data, init] = toNextResponse(
        await remote.putExerciseFormData(formData, alias)
    )
    return NextResponse.json(data, init)
}
