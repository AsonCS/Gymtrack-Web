import { Exception } from './Exception'

export class FieldException extends Exception {
    constructor() {
        super('Field exceptions', 401)
    }
}
