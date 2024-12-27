export interface ApiResponse<T> {
    data?: T
    error?: any
    status: number
}

export function toNextResponse(response: ApiResponse<unknown>) {
    let error = undefined
    if (response.error) {
        error = response.error.message ?? 'Error'
    }
    return [
        {
            data: response.data,
            error: error,
            status: response.status,
        },
        {
            status: response.status,
        },
    ]
}
