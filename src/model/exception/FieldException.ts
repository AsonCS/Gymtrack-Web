import Exception from './Exception'

export default class FieldException extends Exception {
    constructor(field: string) {
        super(`Field '${field}' exception`, 400)
    }
}
