
export interface GenericApiResultModel<T> {
    data: T | T[]
    isSuccess: boolean
    message: string
}

export interface GenericApiResultModelWithPagination<T> extends GenericApiResultModel<T> {
    pageIndex: number;
    itemsCount: number;
}