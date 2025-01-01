import { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'

import { replaceSlashes } from '@/data'

export const revalidate = 60 * 60 * 24 * 7

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ path: string }> }
) {
    Change here to cache images
    // https://nextjs.org/docs/app/api-reference/functions/image-response
    // https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-image-generation
    // http://localhost:3000/image/all_exercises%2Fseated_row_machine%2Fdefault.jpeg?height=200&width=200&token=49de057e-677a-4013-a1b0-014842b3f36e
    const path = replaceSlashes((await params).path)

    const alias = req.nextUrl.searchParams.get('alias') ?? ''
    const alt = req.nextUrl.searchParams.get('alt') ?? ''
    const heightParam = req.nextUrl.searchParams.get('height')
    const widthParam = req.nextUrl.searchParams.get('width')
    const token = req.nextUrl.searchParams.get('token') ?? ''

    let height: number | undefined = undefined
    if (heightParam) {
        height = parseInt(heightParam)
    }
    let width: number | undefined = undefined
    if (widthParam) {
        width = parseInt(widthParam)
    }

    const image = process.env
        .FIREBASE_STORAGE_URL!.replace('{alt}', alt)
        .replace('{path}', path)
        .replace('{token}', token)

    console.log(alias)
    console.log(path)
    console.log(image)
    console.log(height)
    console.log(width)
    return new ImageResponse(
        (
            <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={alias} height={height} src={image} width={width} />
            </div>
        ),
        {
            headers: {
                'Cache-Control': `max-age=${revalidate}`,
            },
            height: height,
            width: width,
        }
    )
}
