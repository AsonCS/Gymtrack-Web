import { Controller, Get, Param } from '@nestjs/common'

import { Response, Workout } from 'core'

import { workouts } from 'src/_mock/user/workouts'

@Controller('user/workouts')
export class WorkoutsController {
    @Get()
    async all(): Promise<Response<Workout[]>> {
        return {
            data: workouts(),
        }
    }
}
