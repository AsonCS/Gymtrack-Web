import { Wrapper } from '@/data/_utils/Wrapper'

export default class Exception extends Error {
    constructor(message: string, status: number) {
        super(message)
        this.message = message
        this.status = status
    }

    message: string
    status: number
}

export function toApiResponseError<T>(e: any): Wrapper<T> {
    let error: Exception = new Exception(e.message, 500)
    if (e instanceof Exception) {
        error = e
    }
    return {
        error,
        status: error.status,
    }
}
