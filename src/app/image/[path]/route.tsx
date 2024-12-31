import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ path: string }> }
) {
    // /image/all_exercises%2Fseated_row_machine%2Fdefault.jpeg?token=49de057e-677a-4013-a1b0-014842b3f36e
    const path = (await params).path.replaceAll('/', '%2F')
    const token = req.nextUrl.searchParams.get('token')!

    const image = process.env
        .FIREBASE_STORAGE_URL!.replace('{path}', path)
        .replace('{token}', token)

    return NextResponse.redirect(image)
}
