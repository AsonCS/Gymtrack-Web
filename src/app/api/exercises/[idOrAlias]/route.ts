import { NextRequest, NextResponse } from 'next/server'

import { exerciseRemoteBackend } from '@/data/exercise'

export async function GET(
    _: NextRequest,
    { params }: { params: Promise<{ idOrAlias: string }> }
) {
    const remote = exerciseRemoteBackend()
    const idOrAlias = (await params).idOrAlias
    const result = await remote.getExercise(idOrAlias)
    return NextResponse.json(result, { status: 200 })
}
