import Exception from './Exception'

export default class NotFoundException extends Exception {
    constructor() {
        super(`Not found exception`, 404)
    }
}
