import { NextRequest, NextResponse } from 'next/server'

import { beExerciseRepository } from '@/data/exercise'
import { toNextResponse } from '@/data/ApiResponse'

export async function GET(
    _: NextRequest,
    { params }: { params: Promise<{ idOrAlias: string }> }
) {
    const remote = beExerciseRepository()
    const idOrAlias = (await params).idOrAlias
    const [data, init] = toNextResponse(await remote.getExercise(idOrAlias))
    return NextResponse.json(data, init)
}
