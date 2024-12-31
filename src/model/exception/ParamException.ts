import Exception from './Exception'

export default class ParamException extends Exception {
    constructor(param: string) {
        super(`Param '${param}' exception`, 400)
    }
}
