import { UserExerciseDetail } from 'core'
import { exercises } from './exercises'

export function userExercises(): UserExerciseDetail[] {
    return [
        {
            exercise: exercises()
                .map((e) => {
                    return {
                        alias: e.alias,
                        id: e.id,
                        image: e.image,
                        title: e.title,
                        title_pt_br: e.title_pt_br,
                    }
                })
                .find((e) => e.id === 'id_puxada_alta'),
            id: 'id_puxada_alta_af',
            executions: [
                {
                    id: 'id_0',
                    notes: 'Aberto',
                    reps: 4,
                    weight: 75,
                },
                {
                    id: 'id_1',
                    notes: 'Aberto, falha com menos de 8, somar 12',
                    reps: 8,
                    weight: 96,
                },
                {
                    id: 'id_2',
                    notes: 'Aberto, falha com menos de 8, somar 8',
                    reps: 8,
                    weight: 82,
                },
                {
                    id: 'id_3',
                    notes: 'Aberto de costas',
                    reps: 8,
                    weight: 75,
                },
                {
                    id: 'id_4',
                    notes: 'Aberto de costas',
                    reps: 8,
                    weight: 61,
                },
                {
                    id: 'id_5',
                    notes: 'Fechado',
                    reps: 8,
                    weight: 103,
                },
                {
                    id: 'id_6',
                    notes: 'Fechado, falha com menos de 8, somar 8',
                    reps: 8,
                    weight: 110,
                },
                {
                    id: 'id_7',
                    notes: 'Fechado',
                    reps: 8,
                    weight: 89,
                },
                {
                    id: 'id_8',
                    notes: 'Fechado',
                    reps: 8,
                    weight: 82,
                },
            ],
            name: 'puxada alta aberto/fechado',
            description: null,
        },
        {
            exercise: exercises()
                .map((e) => {
                    return {
                        alias: e.alias,
                        id: e.id,
                        image: e.image,
                        title: e.title,
                        title_pt_br: e.title_pt_br,
                    }
                })
                .find((e) => e.id === 'id_puxada_alta'),
            id: 'id_puxada_alta_n',
            executions: [
                {
                    id: 'id_0',
                    notes: 'Neutro',
                    reps: 8,
                    weight: 103,
                },
                {
                    id: 'id_1',
                    notes: 'Neutro, falha com menos de 8, somar 8',
                    reps: 8,
                    weight: 110,
                },
                {
                    id: 'id_2',
                    notes: 'Neutro, falha com menos de 8, somar 12',
                    reps: 8,
                    weight: 89,
                },
                {
                    id: 'id_3',
                    notes: 'Neutro, falha com menos de 8, somar 12',
                    reps: 8,
                    weight: 82,
                },
            ],
            name: 'puxada alta neutro',
            description: null,
        },
    ]
}
