import Exception from './Exception'

export default class EmptyException extends Exception {
    constructor() {
        super(`Empty exception`, 404)
    }
}
