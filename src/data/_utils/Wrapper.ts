export interface Wrapper<T> {
    data?: T
    error?: any
    status: number
}

export function toNextResponse(wrapper: Wrapper<unknown>) {
    let error = undefined
    if (wrapper.error) {
        error = wrapper.error.message ?? 'Error'
    }
    return [
        {
            data: wrapper.data,
            error: error,
            status: wrapper.status,
        },
        {
            status: wrapper.status,
        },
    ]
}
