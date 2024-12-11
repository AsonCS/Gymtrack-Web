import { NextResponse } from 'next/server'

import { exerciseRemoteBackend } from '@/data/exercise'

export async function GET() {
    const remote = exerciseRemoteBackend()
    return NextResponse.json(await remote.getExercises(), { status: 200 })
}
