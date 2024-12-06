import { Controller, Get, Param } from '@nestjs/common'

import { Exercise, ExerciseDetail, Response, toExercise } from 'core'

import { exercises } from 'src/_mock/exercises'

@Controller('exercises')
export class ExercisesController {
    @Get()
    async all(): Promise<Response<Exercise[]>> {
        return {
            data: exercises().map((e) => toExercise(e)),
        }
    }

    @Get('/:idOrAlias')
    async byId(
        @Param('idOrAlias') idOrAlias: string
    ): Promise<Response<ExerciseDetail>> {
        return {
            data: exercises().find(
                (e) => e.id === idOrAlias || e.alias === idOrAlias
            ),
        }
    }
}
