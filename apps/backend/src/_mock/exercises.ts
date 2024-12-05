import { ExerciseDetail } from 'core'

export function exercises(): ExerciseDetail[] {
    const exercises: ExerciseDetail[] = [
        {
            alias: 'seated_row_machine',
            description:
                'the seated row machine is a strength training exercise that targets the back muscles, primarily the latissimus dorsi, rhomboids, and traps. it also works the biceps and forearms.',
            description_pt_br:
                'a remada sentada é um exercício de força que tem como alvo os músculos das costas, principalmente o músculo grande dorsal, os romboides e os trapézios. também trabalha os bíceps e os antebraços.',
            id: 'id_id_id_id_id_id_id',
            image: 'default.jpg',
            title: 'seated row machine',
            title_pt_br: 'remada sentada',
            video: null,
        },
        {
            alias: 'puxada_alta',
            description: 'puxada alta',
            description_pt_br: 'puxada alta',
            id: 'id_puxada_alta',
            image: null,
            title: 'puxada alta',
            title_pt_br: 'puxada alta',
            video: null,
        },
    ]
    for (let i = 0; i < 10; i++) {
        exercises.push({
            alias: `alias-${i.toString()}`,
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            description_pt_br:
                'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.',
            id: `id-${i.toString()}`,
            title: 'What is Lorem Ipsum?',
            title_pt_br: 'O que é o Lorem Ipsum?',
        })
    }

    return exercises
}
