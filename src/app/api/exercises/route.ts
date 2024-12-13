import { NextRequest, NextResponse } from 'next/server'

import { exerciseRemoteBackend } from '@/data/exercise'

export async function GET() {
    const remote = exerciseRemoteBackend()
    const result = await remote.getExercises()
    return NextResponse.json(result, { status: result.status })
}

export async function POST(req: NextRequest) {
    const remote = exerciseRemoteBackend()
    const result = await remote.putExercise(await req.json())
    return NextResponse.json(result, { status: result.status })
}
