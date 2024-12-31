import Exception from './Exception'

export default class NotFoundException extends Exception {
    constructor(message: string = 'Not found exception') {
        super(message, 404)
    }
}
