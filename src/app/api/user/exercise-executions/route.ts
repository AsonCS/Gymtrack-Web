import { NextResponse } from 'next/server'

export async function GET() {
    const mock =
        require('../../../../../mock/user/exercises').mockExerciseExecutions
    return NextResponse.json(mock, { status: 200 })
}
