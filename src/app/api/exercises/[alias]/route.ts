import { NextRequest, NextResponse } from 'next/server'

import { toNextResponse } from '@/data'
import { beExerciseRepository } from '@/data/backend'
import { getLang } from '@/model'

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
    req: NextRequest,
    { params }: { params: Promise<{ alias: string }> }
) {
    const lang = getLang(req.nextUrl.searchParams.get('lang'))
    const full = Boolean(req.nextUrl.searchParams.get('full'))
    const alias = (await params).alias

    const remote = beExerciseRepository(lang)
    const [data, init] = toNextResponse(await remote.getExercise(alias, full))
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
        await remote.putExerciseFormData(alias, formData)
    )
    return NextResponse.json(data, init)
}
