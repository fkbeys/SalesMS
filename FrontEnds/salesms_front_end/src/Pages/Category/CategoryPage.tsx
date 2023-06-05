
import { MRT_ColumnDef, MRT_ColumnFiltersState, MRT_SortingState, } from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { AppDispatch } from "../../app/store";
import { AsyncGetAllCategorys } from "../../Slices/CategorySlice";
import { RequestDataWithPaginationModel } from "../../Models/Generic/RequestDataWithPaginationModel";
import GenericModal from "../../Components/UiComponents/GenericModal";
import CategoryCreateUpdateUI from "./CategoryCreateUpdateUI";
import GenericGrid from "../../Components/UiComponents/GenericGrid";
import { GuidGenerator } from "../../Consts/GuidGenerator";
import { ConvertDbDateFormatToDayMonthYear } from "../../Consts/DbTarihFormatiniNormaleCevir";
import { CategoryModel } from "../../Models/Category/CategoryModel";


interface model {
    afterSelection: Function;
}

const CategoryPage = (model: model) => {
    const CategorySlice = useAppSelector((state) => state.CategorySlice);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    function viewButtonHandler(row: any) {
        setEditModalState(true);
        setSelectedObj(row);
    }
    function editButtonHandler(row: CategoryModel) {
        setEditModalState(true);
        setSelectedObj(row);
    }
    async function deleteButtonHandler(row: CategoryModel) { }
    function rowDoubleClickHandler(row: CategoryModel) {
        model.afterSelection(row);
    }
    function rowClickHandler(row: CategoryModel) { }
    function rowSelectionHandler(data: any) {
        console.log(data);
    }
    function rowKeyGetter(row: CategoryModel) {
        return row.id;
    }
    function addButtonHandler() {
        setEditModalState(true);
        setSelectedObj({ id: GuidGenerator() } as CategoryModel);
    }

    const [pagination, setPagination] = useState(
        {} as RequestDataWithPaginationModel
    );
    const [searchText, setsearchText] = useState("");
    const [editModalState, setEditModalState] = useState(false);
    const [selectedObj, setSelectedObj] = useState({} as CategoryModel);
    const [columntFilter, setcolumntFilter] = useState([
        { id: "", value: "" },
    ] as MRT_ColumnFiltersState);
    const [columnSort, setColumnSort] = useState<MRT_SortingState>([]);

    useEffect(() => {
        RefreshGrid();
    }, [
        pagination.pageIndex,
        pagination.pageSize,
        searchText,
        columntFilter,
        columnSort,
    ]);

    async function RefreshGrid() {
        if (
            pagination.pageIndex === undefined ||
            pagination.pageSize === undefined
        ) {
            return;
        }

        dispatch(
            AsyncGetAllCategorys({
                pageIndex: pagination.pageIndex == undefined ? 0 : pagination.pageIndex,
                pageSize: pagination.pageSize == undefined ? 0 : pagination.pageSize,
                searchText: searchText == undefined ? "" : searchText,
                columnFilters: JSON.stringify(columntFilter),
                columnSorts: JSON.stringify(columnSort),
            } as RequestDataWithPaginationModel)
        );
    }

    const columns = useMemo<MRT_ColumnDef<CategoryModel | any>[]>(
        () => [
            { accessorKey: "name", header: "Name", size: 200, enableColumnFilter: false },
        ],
        []
    );

    const ModalUI = (
        <GenericModal
            Height={0}
            Width={70}
            content={
                <CategoryCreateUpdateUI
                    obj={selectedObj}
                    afterSuccesfullSave={() => {
                        RefreshGrid();
                        setEditModalState(false);
                    }}
                />
            }
            onClose={() => {
                setEditModalState(false);
            }}
            state={editModalState}
        />
    );

    return (
        <Grid container>
            {ModalUI}

            <Grid item xs={12}>
                {CategorySlice.errorMessage}
                <GenericGrid
                    rowDoubleClickCellHandleEvent={() => { }}
                    columns={columns}
                    data={CategorySlice?.Categorys}
                    isBusy={CategorySlice?.isBusy}
                    viewButtonClickEvent={viewButtonHandler}
                    editButtonClickEvent={editButtonHandler}
                    deleteButtonClickEvent={deleteButtonHandler}
                    enableRowSelection={false}
                    rowDoubleClickEvent={rowDoubleClickHandler}
                    rowClickEvent={rowClickHandler}
                    rowKeyGetter={rowKeyGetter}
                    selectedRows={rowSelectionHandler}
                    paginationChanged={setPagination}
                    totalItemsCount={CategorySlice?.itemsCount}
                    showRowActions
                    addButtonClickEvent={addButtonHandler}
                    showAddButton
                    viewButtonVisible
                    editButtonVisible
                    deleteButtonVisible
                    confirmButtonVisible={false}
                    confirmButtonClickEvent={() => { }}
                    enableFilters
                    setSearchTextChange={setsearchText}
                    setColumnFilterChange={setcolumntFilter}
                    setColumnSortingChange={setColumnSort}
                />
            </Grid>
        </Grid>
    );
};

export default CategoryPage;
