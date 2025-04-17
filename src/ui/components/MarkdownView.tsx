/* eslint-disable @next/next/no-sync-scripts */
'use client'

import { useEffect, useState } from 'react'

import '@/ui/css/github.css'

interface Params {
    markdownText: string
}

export default function Md({ markdownText }: Params) {
    const [content, setContent] = useState<{ __html: string }>({ __html: '' })

    useEffect(() => {
        const converter = new (window as any).showdown.Converter()
        setContent({ __html: converter.makeHtml(markdownText) })
    }, [markdownText])

    return (
        <>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js"></script>
            <main className="markdown-body" dangerouslySetInnerHTML={content} />
        </>
    )
}
