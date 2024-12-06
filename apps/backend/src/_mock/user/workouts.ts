import { Workout } from 'core'

export function workouts(): Workout[] {
    const days = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
    ]
    const list: Workout[] = []
    for (let i = 0; i < days.length; i++) {
        list.push({
            description:
                'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.',
            exerciseExecutionIds: ['id_puxada_alta_af', 'id_puxada_alta_n'],
            id: `id_${days[i]}_workout_${i}`,
            name: `${days[i]} workout ${i}`,
        })
    }
    return list
}
