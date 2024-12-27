import { NextRequest, NextResponse } from 'next/server'

import { beExerciseRepository } from '@/data/exercise'
import { toNextResponse } from '@/data/_utils/Wrapper'

export async function GET(
    _: NextRequest,
    { params }: { params: Promise<{ alias: string }> }
) {
    const remote = beExerciseRepository()
    const alias = (await params).alias
    const [data, init] = toNextResponse(await remote.getExercise(alias))
    return NextResponse.json(data, init)
}
