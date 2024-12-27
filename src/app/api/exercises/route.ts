import { NextRequest, NextResponse } from 'next/server'

import { beExerciseRepository } from '@/data/exercise'
import { toNextResponse } from '@/data/_utils/Wrapper'

export async function GET() {
    const remote = beExerciseRepository()
    const [data, init] = toNextResponse(await remote.getExercises())
    return NextResponse.json(data, init)
}

export async function POST(req: NextRequest) {
    const remote = beExerciseRepository()
    const [data, init] = toNextResponse(
        await remote.postExercise(await req.json())
    )
    return NextResponse.json(data, init)
}
