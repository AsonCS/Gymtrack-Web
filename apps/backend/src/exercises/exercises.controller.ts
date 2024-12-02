import { Controller, Get } from '@nestjs/common'

import { Exercise, Response } from 'core'

import { exercises } from 'src/_mock/exercises'

@Controller('exercises')
export class ExercisesController {
    @Get()
    async all(): Promise<Response<Exercise[]>> {
        return {
            data: exercises,
        }
    }
}
