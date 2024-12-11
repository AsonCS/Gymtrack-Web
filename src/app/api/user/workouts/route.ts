import { NextResponse } from 'next/server'

export async function GET() {
    const mock = require('../../../../../mock/user/workouts').mockWorkouts
    return NextResponse.json(mock, { status: 200 })
}
