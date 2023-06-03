export interface ApiResultPaginationModel<T> {
    pageIndex: number
    itemsCount: number
    data: T[]
    isSuccess: boolean
    message: any
}
