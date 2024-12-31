import { NextRequest, NextResponse } from 'next/server'

import { toNextResponse, Wrapper } from '@/data'
import { beExerciseRepository } from '@/data/backend'
import { getLang } from '@/model'

export async function GET(req: NextRequest) {
    const lang = getLang(req.nextUrl.searchParams.get('lang'))

    const remote = beExerciseRepository(lang)
    const [data, init] = toNextResponse(await remote.getExercises())
    return NextResponse.json(data, init)
}

export async function POST(req: NextRequest) {
    const remote = beExerciseRepository()

    console.log(req)
    let result: Wrapper<void>
    if (req.headers.get('content-type') === 'application/json') {
        result = await remote.postExercise(await req.json())
    } else {
        result = await remote.postExerciseFormData(await req.formData())
    }

    const [data, init] = toNextResponse(result)
    return NextResponse.json(data, init)
}
