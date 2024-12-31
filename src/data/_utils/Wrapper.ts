export interface Wrapper<T> {
    data?: T
    error?: any
    status: number
}

export const StatusOk = 200
export const StatusInternalServerError = 500

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
