
import { MRT_ColumnDef, MRT_ColumnFiltersState, MRT_SortingState, } from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { AppDispatch } from "../../app/store";
import { CourseModel } from "../../Models/Course/CourseModel";
import { AsyncGetAllCourses } from "../../Slices/CourseSlice";
import { RequestDataWithPaginationModel } from "../../Models/Generic/RequestDataWithPaginationModel";
import GenericModal from "../../Components/UiComponents/GenericModal";
import CourseCreateUpdateUI from "./CourseCreateUpdateUI";
import GenericGrid from "../../Components/UiComponents/GenericGrid";
import { GuidGenerator } from "../../Consts/GuidGenerator";
import { ConvertDbDateFormatToDayMonthYear } from "../../Consts/DbTarihFormatiniNormaleCevir";
import CourseManager from "../../Managers/CourseManager";
import { useAuthHeader } from "react-auth-kit";
import { toast } from "react-hot-toast";
import Url from "../../Consts/Url";
import PhotoApiManager from "../../Managers/PhotoApiManager";


interface model {
    afterSelection: Function;
}

const CoursePage = (model: model) => {
    const authHeader = useAuthHeader();
    const CourseSlice = useAppSelector((state) => state.CourseSlice);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    function viewButtonHandler(row: any) {
        setEditModalState(true);
        setSelectedObj(row);
    }
    function editButtonHandler(row: CourseModel) {
        setEditModalState(true);
        setSelectedObj(row);
    }
    async function deleteButtonHandler(row: CourseModel) {
        var result = await CourseManager.Delete(row.id, authHeader());

        if (result.isSuccess) {
            toast.success("Course deleted...");
            await PhotoApiManager.DeletePhoto(row.picture, authHeader());
        } else {
            toast.error(result.message);
        }


        RefreshGrid();
    }
    function rowDoubleClickHandler(row: CourseModel) {
        model.afterSelection(row);
    }
    function rowClickHandler(row: CourseModel) { }
    function rowSelectionHandler(data: any) {
        console.log(data);
    }
    function rowKeyGetter(row: CourseModel) {
        return row.id;
    }
    function addButtonHandler() {
        setEditModalState(true);
        setSelectedObj({ id: GuidGenerator() } as CourseModel);
    }

    const [pagination, setPagination] = useState(
        {} as RequestDataWithPaginationModel
    );
    const [searchText, setsearchText] = useState("");
    const [editModalState, setEditModalState] = useState(false);
    const [selectedObj, setSelectedObj] = useState({} as CourseModel);
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
            AsyncGetAllCourses({
                pageIndex: pagination.pageIndex == undefined ? 0 : pagination.pageIndex,
                pageSize: pagination.pageSize == undefined ? 0 : pagination.pageSize,
                searchText: searchText == undefined ? "" : searchText,
                columnFilters: JSON.stringify(columntFilter),
                columnSorts: JSON.stringify(columnSort),
            } as RequestDataWithPaginationModel)
        );
    }

    const imageStyle = {
        width: '100px',
        height: '100px'
    };

    const columns = useMemo<MRT_ColumnDef<CourseModel | any>[]>(
        () => [
            { accessorKey: "picture", header: "Picture", accessorFn: (originalRow) => <img src={Url.PhotoShowUrl + '/' + originalRow.picture} alt="Your alt text here" style={imageStyle} />, enableColumnFilter: false },
            { accessorKey: "name", header: "Name", size: 200, enableColumnFilter: false },
            { accessorKey: "decription", header: "Decription", size: 200, enableColumnFilter: false },
            { accessorKey: "price", header: "Price", size: 200, enableColumnFilter: false },
            { accessorKey: "createdDateTime", header: "CreatedDateTime", accessorFn: (originalRow) => ConvertDbDateFormatToDayMonthYear(originalRow.CreatedDateTime, true), enableColumnFilter: false },
            { accessorKey: "category", header: "Category", size: 200, accessorFn: (originalRow) => originalRow?.category?.name ?? "", enableColumnFilter: false },
        ],
        []
    );


    console.log(CourseSlice?.courses);



    const ModalUI = (
        <GenericModal
            Height={0}
            Width={70}
            content={
                <CourseCreateUpdateUI
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
                {CourseSlice.errorMessage}
                <GenericGrid
                    rowDoubleClickCellHandleEvent={() => { }}
                    columns={columns}
                    data={CourseSlice?.courses}
                    isBusy={CourseSlice?.isBusy}
                    viewButtonClickEvent={viewButtonHandler}
                    editButtonClickEvent={editButtonHandler}
                    deleteButtonClickEvent={deleteButtonHandler}
                    enableRowSelection={false}
                    rowDoubleClickEvent={rowDoubleClickHandler}
                    rowClickEvent={rowClickHandler}
                    rowKeyGetter={rowKeyGetter}
                    selectedRows={rowSelectionHandler}
                    paginationChanged={setPagination}
                    totalItemsCount={CourseSlice?.itemsCount}
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

export default CoursePage;
