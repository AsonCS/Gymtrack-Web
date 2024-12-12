import { NextRequest, NextResponse } from 'next/server'

import { EmptyException, ParamException } from '@/model/exception'
import { ExerciseExecutionDetail, toExerciseExecution } from '@/model/exercise'

export async function GET(req: NextRequest) {
    const ids = req.nextUrl.searchParams.get('ids')?.split(',')
    return await response(ids)
}

export async function POST(req: NextRequest) {
    const ids = await req.json()
    return await response(ids)
}

async function response(ids: string[] | undefined) {
    if (!ids || ids.length === 0) {
        const error = new ParamException('ids')
        return NextResponse.json(
            { error: error.message },
            { status: error.status }
        )
    }

    const mockExerciseExecutions: ExerciseExecutionDetail[] =
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('../../../../../mock/user/exercises').mockExerciseExecutions
    const mock = mockExerciseExecutions
        .filter((e) => ids?.includes(e.id))
        .map((e) => toExerciseExecution(e))
    if (mock.length === 0) {
        const error = new EmptyException()
        return NextResponse.json(
            { error: error.message },
            { status: error.status }
        )
    }
    return NextResponse.json({ data: mock }, { status: 200 })
}
