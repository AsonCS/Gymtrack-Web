import { NextResponse } from 'next/server'

import { Workout } from '@/model/workout'

export async function GET() {
    const mockWorkouts: Workout[] =
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('../../../../../mock/user/workouts').mockWorkouts
    return NextResponse.json({ data: mockWorkouts }, { status: 200 })
}
