import { MRT_ColumnFiltersState } from "material-react-table"

export interface RequestDataWithPaginationModel {
    pageIndex: number
    pageSize: number
    searchText: string
    filterInt: number
    filterGuid: string
    columnFilters: string
    columnSorts: string
}


