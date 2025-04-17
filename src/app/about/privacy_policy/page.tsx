import strings from '@/ui/strings'
import MarkdownView from '@/ui/components/MarkdownView'

interface Params {
    params: Promise<unknown>
    searchParams: Promise<{ lang: string }>
}

export default async function PrivacyPolicy({ searchParams }: Params) {
    const { lang } = await searchParams
    const str = strings(lang).about.privacyPolicy

    let policy =
        'https://firebasestorage.googleapis.com/v0/b/gymtrack-asoncsts.firebasestorage.app/o/about%2Fprivacy_policy_pt.md?alt=media&token=6b729fc1-87b4-44d9-a4e2-758fd9735353'
    if (lang?.includes('en'))
        policy =
            'https://firebasestorage.googleapis.com/v0/b/gymtrack-asoncsts.firebasestorage.app/o/about%2Fprivacy_policy.md?alt=media&token=65527ea8-3dc2-486d-a4c2-86756f5cc65f'

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
