import { StatusInternalServerError, Wrapper } from '@/data'

export default class Exception extends Error {
    constructor(message: string, status: number) {
        super(message)
        this.message = message
        this.status = status
    }

    message: string
    status: number
}

export function toWrapperError<T>(e: any): Wrapper<T> {
    let error: Exception = new Exception(e.message, StatusInternalServerError)
    if (e instanceof Exception) {
        error = e
    }
    return {
        error,
        status: error.status,
    }
}
