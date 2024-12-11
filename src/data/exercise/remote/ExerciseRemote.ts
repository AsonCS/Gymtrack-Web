import { ApiResponse } from '@/data/ApiResponse'
import { Exercise, ExerciseDetail } from '@/model/exercise'

import { ExerciseApi } from '../api/ExerciseApi'

export interface ExerciseRemote {
    getExercise: (idOrAlias: string) => Promise<ApiResponse<ExerciseDetail>>
    getExercises: () => Promise<ApiResponse<Array<Exercise>>>
}

export function exerciseRemoteBackend(): ExerciseRemote {
    return {
        getExercise: async (idOrAlias) => {
            return {
                data: {
                    alias: idOrAlias,
                    description: 'description',
                    description_pt_br: 'description_pt_br',
                    id: idOrAlias,
                    image: 'image',
                    title: 'title',
                    title_pt_br: 'title_pt_br',
                },
            }
        },
        async getExercises() {
            return {
                data: [
                    {
                        alias: 'idOrAlias',
                        id: 'idOrAlias',
                        image: 'image',
                        title: 'title',
                        title_pt_br: 'title_pt_br',
                    },
                ],
            }
        },
    }
}

export function exerciseRemoteFrontend(api: ExerciseApi): ExerciseRemote {
    return {
        getExercise: async (idOrAlias) => {
            const url = api.exercise(idOrAlias)
            const result = await fetch(url).then((res) => res.json())
            return result as ApiResponse<ExerciseDetail>
        },
        getExercises: async () => {
            const url = api.exercises()
            const result = await fetch(url).then((res) => res.json())
            return result as ApiResponse<Array<Exercise>>
        },
    }
}
