import { Controller, Get, Param } from '@nestjs/common'

import { UserExercise, Response, UserExerciseDetail } from 'core'
import { userExercises } from 'src/_mock/userExercises'

@Controller('user-exercises')
export class UserExercisesController {
    @Get()
    async all(): Promise<Response<UserExercise[]>> {
        return {
            data: userExercises().map((e) => {
                return {
                    exercise: e.exercise,
                    id: e.id,
                    name: e.name,
                }
            }),
        }
    }

    @Get('/:id')
    async byId(@Param('id') id: string): Promise<Response<UserExerciseDetail>> {
        return {
            data: userExercises().find((e) => e.id === id),
        }
    }
}
