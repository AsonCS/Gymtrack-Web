import { Controller, Get, Param } from '@nestjs/common'

import { Exercise, ExerciseDetail, Response } from 'core'

import { exercises } from 'src/_mock/exercises'

@Controller('exercises')
export class ExercisesController {
    @Get()
    async all(): Promise<Response<Exercise[]>> {
        return {
            data: exercises().map((e) => {
                return {
                    alias: e.alias,
                    id: e.id,
                    image: e.image,
                    title: e.title,
                    title_pt_br: e.title_pt_br,
                }
            }),
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
