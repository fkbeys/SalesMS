export interface ApiResultModelMultiple<T> {
    data: T[]
    isSuccess: boolean
    message: string
}

export interface ApiResultModelSingle<T> {
    data: T
    isSuccess: boolean
    message: string
}
