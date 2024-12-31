import { StatusInternalServerError } from '@/data'

import Exception from './Exception'

export default class UnknownException extends Exception {
    constructor(message: string = 'Unknown exception') {
        super(message, StatusInternalServerError)
    }
}
