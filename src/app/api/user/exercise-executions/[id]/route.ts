import { NextRequest, NextResponse } from 'next/server'

import { NotFoundException, ParamException } from '@/model/exception'
import { ExerciseExecutionDetail } from '@/model/exercise'
import { StatusOk } from '@/data'

export async function GET(
    _: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const id = (await params).id
    if (!id) {
        const error = new ParamException('id')
        return NextResponse.json(
            { error: error.message },
            { status: error.status }
        )
    }
    const mockExerciseExecutions: ExerciseExecutionDetail[] = []
    const mock = mockExerciseExecutions.find((e) => e.id === id)
    if (!mock) {
        const error = new NotFoundException()
        return NextResponse.json(
            { error: error.message },
            { status: error.status }
        )
    }
    return NextResponse.json({ data: mock }, { status: StatusOk })
}
