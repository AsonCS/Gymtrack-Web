import strings from '@/ui/strings'
import MarkdownView from '@/ui/components/MarkdownView'

interface Params {
    params: Promise<unknown>
    searchParams: Promise<{ lang: string }>
}

export default async function DataExclusion({ searchParams }: Params) {
    const { lang } = await searchParams
    const str = strings(lang).about.dataExclusion

    let policy =
        'https://firebasestorage.googleapis.com/v0/b/gymtrack-asoncsts.firebasestorage.app/o/about%2Fdata_deletion_pt.md?alt=media&token=15332bd5-b654-43a3-947a-5d02c5d5f01c'
    if (lang?.includes('en'))
        policy =
            'https://firebasestorage.googleapis.com/v0/b/gymtrack-asoncsts.firebasestorage.app/o/about%2Fdata_deletion.md?alt=media&token=96e71656-75ec-42d0-9104-79236c28be6d'

    const md = await fetch(policy).then((it) => it.text())
    return (
        <div className="flex flex-col justify-center p-20">
            <h1 className="font-bold pb-10 text-center text-4xl">
                {str.labelTitle}
            </h1>
            <MarkdownView markdownText={md} />
        </div>
    )
}
