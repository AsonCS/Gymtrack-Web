import { NextRequest } from 'next/server'
import sharp from 'sharp'

import { replaceSlashes } from '@/data'

export const revalidate = 60 * 60 * 24 * 7

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ path: string }> }
) {
    const path = replaceSlashes((await params).path)

    const alt = req.nextUrl.searchParams.get('alt') ?? ''
    const token = req.nextUrl.searchParams.get('token') ?? ''

    const height = req.nextUrl.searchParams.get('height')
    const width = req.nextUrl.searchParams.get('width')

    const imageUrl = process.env
        .FIREBASE_STORAGE_URL!.replace('{alt}', alt)
        .replace('{path}', path)
        .replace('{token}', token)

    const image = await fetch(imageUrl)
        .then((res) => res.arrayBuffer())
        .then((buffer) => sharp(buffer))
    if (width) {
        if (height) {
            image.resize(parseInt(width), parseInt(height))
        } else {
            image.resize(parseInt(width))
        }
    }

    return new Response(await image.toBuffer(), {
        headers: {
            'cache-control': `max-age=${revalidate}`,
            'content-type': 'image/*',
        },
        status: 200,
    })
}
