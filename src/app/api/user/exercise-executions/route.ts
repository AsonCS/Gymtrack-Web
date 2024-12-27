import { NextRequest, NextResponse } from 'next/server'

import { EmptyException } from '@/model/exception'
import {
    ExerciseExecutionDetail,
    toExerciseExecution,
    toSimpleView,
} from '@/model/exercise'

export async function GET(req: NextRequest) {
    const ids = req.nextUrl.searchParams
        .get('ids')
        ?.split(',')
        ?.filter((id) => id)
    return await response(ids)
}

export async function POST(req: NextRequest) {
    const ids = await req.json()
    return await response(ids)
}

async function response(ids: string[] | undefined) {
    const mockExerciseExecutions: ExerciseExecutionDetail[] = []

    if (!ids || ids.length === 0) {
        const mock = mockExerciseExecutions.map((e) => toSimpleView(e))
        return NextResponse.json({ data: mock }, { status: 200 })
    }

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
