import { Controller, Get, Param, Query } from '@nestjs/common'

import {
    ExerciseExecution,
    ExerciseExecutionDetail,
    Response,
    toExerciseExecution,
} from 'core'

import { exerciseExecutions } from 'src/_mock/user/exercises'

@Controller('user/exercise-executions')
export class ExerciseExecutionsController {
    @Get()
    async all(
        @Query('ids') ids: string
    ): Promise<Response<ExerciseExecution[]>> {
        return {
            data: exerciseExecutions()
                .filter((e) => ids?.includes(e.id))
                .map((e) => toExerciseExecution(e)),
        }
    }

    @Get('/:id')
    async byId(
        @Param('id') id: string
    ): Promise<Response<ExerciseExecutionDetail>> {
        return {
            data: exerciseExecutions().find((e) => e.id === id),
        }
    }
}
