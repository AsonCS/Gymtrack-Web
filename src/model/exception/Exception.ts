export abstract class Exception extends Error {
    constructor(message: string, status: number) {
        super(message)
        this.message = message
        this.status = status
    }

    message: string
    status: number
}
