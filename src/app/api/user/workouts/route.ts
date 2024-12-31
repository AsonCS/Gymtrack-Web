import { NextRequest, NextResponse } from 'next/server'

import { workoutRemoteBackend } from '@/data/user/remote/WorkoutRemote'

export async function GET() {
    const remote = workoutRemoteBackend()
    const result = await remote.getWorkouts()
    return NextResponse.json(result, { status: result.status })
}

export async function POST(req: NextRequest) {
    const remote = workoutRemoteBackend()
    const result = await remote.putWorkout(await req.json())
    return NextResponse.json(result, { status: result.status })
}
