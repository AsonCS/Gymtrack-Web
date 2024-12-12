import { NextRequest, NextResponse } from 'next/server'

import { exerciseRemoteBackend } from '@/data/exercise'
import { checkExerciseDetail, ExerciseDetail } from '@/model/exercise'

export async function GET() {
    const remote = exerciseRemoteBackend()
    return NextResponse.json(await remote.getExercises(), { status: 200 })
}

export async function POST(req: NextRequest) {
    const exercise = checkExerciseDetail(await req.json())
    if (!exercise.id) {
        exercise.id = new Date().getTime().toString(16)
    }
    const mockExercises: ExerciseDetail[] =
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('../../../../mock/exercises').mockExercises
    mockExercises.push(exercise as ExerciseDetail)
    return NextResponse.json({ data: exercise }, { status: 200 })
}
