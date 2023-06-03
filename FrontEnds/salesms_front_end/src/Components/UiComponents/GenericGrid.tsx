import { Add, Cancel, Check, Delete, Edit, RemoveRedEye } from '@mui/icons-material'
import { Box, Button, MenuItem, ThemeProvider, Tooltip, createTheme, useTheme } from '@mui/material'

import MaterialReactTable, { MRT_Column, MRT_ColumnDef, MRT_ColumnFiltersState, MRT_Localization, MRT_SortingState, MRT_TableInstance } from 'material-react-table'
import { useEffect, useMemo, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import CircularLoading from './CircularLoading'
import CustomButton from './CustomButton'
import YanyanaGetir from './YanyanaGetir'
import { MRT_Localization_EN } from 'material-react-table/locales/en';
import { MRT_Localization_TR } from 'material-react-table/locales/tr';
import { MRT_Localization_DE } from 'material-react-table/locales/de';
import { MRT_Localization_RU } from 'material-react-table/locales/ru';
import GenericModal from './GenericModal'
import { GridCustomLocalizationFileAz } from '../ThemeAndLocalization/GridCustomLocalizationFileAz'
import Url from '../../Consts/Url'



interface model {
    data: any[]
    columns: MRT_ColumnDef<any>[]
    isBusy: boolean
    editButtonClickEvent: Function

    confirmButtonVisible?: boolean
    confirmButtonClickEvent: Function
    confirmButtonText?: string
    confirmButtonIcon?: JSX.Element

    deleteButtonClickEvent: Function
    viewButtonClickEvent: Function
    rowDoubleClickEvent: Function
    rowDoubleClickCellHandleEvent: Function
    rowClickEvent: Function
    rowKeyGetter: any
    selectedRows: Function
    paginationChanged: Function
    totalItemsCount: number
    setSearchTextChange: Function
    setColumnFilterChange: Function
    setColumnSortingChange: Function
    addButtonClickEvent: Function
    showRowActions: boolean
    showAddButton?: boolean
    enableRowSelection?: boolean
    enableMultipleSelection?: boolean
    enableGlobalFilter?: boolean
    viewButtonVisible?: boolean
    editButtonVisible?: boolean
    deleteButtonVisible?: boolean
    enablePagination?: boolean
    enableFilters?: boolean
    enableGrouping?: boolean
    enableFullScreenToggle?: boolean
    enableTopToolbar?: boolean
    customToolbar?: JSX.Element
    renderDetailPanel?: any
}




function getLocalization() {
    const fx = localStorage.getItem("language");
    switch (fx) {
        case 'EN': return MRT_Localization_EN;
        case 'TR': return MRT_Localization_TR;
        case 'AZ': return GridCustomLocalizationFileAz;
        case 'DE': return MRT_Localization_DE;
        case 'RU': return MRT_Localization_RU;
        default: break;
    }


}


const GenericGrid = (model: model) => {
    getLocalization();

    const [deleteModalState, setDeleteModalState] = useState(false);
    const [silinecekKayit, setSilinecekKayit] = useState(false);

    const deleteModalUI = (

        <GenericModal Height={0} Width={0}
            content={
                <Box   >
                    <h2>  Qeydi silmək istəyirsiniz?</h2>
                    <h3>Silinmə əməliyyatından sonra qeydləri geri gətirmək mümkün deyil!</h3>
                    <YanyanaGetir
                        compA={<Button variant="contained" color='error' endIcon={<Delete />} onClick={() => { model.deleteButtonClickEvent(silinecekKayit); setDeleteModalState(false); }}>
                            Silinsin. Razıyam...
                        </Button>}

                        compB={
                            <Button variant="contained" color='info' endIcon={<Cancel />} onClick={() => setDeleteModalState(false)} >
                                Razı deyiləm. Silinməsin.
                            </Button>}
                        sizeA={0}
                        sizeB={0}
                        stil={{}}
                    />
                </Box>
            }
            onClose={() => { setDeleteModalState(false) }}
            state={deleteModalState}

        />

    );

    const actionBoxUI = (row: any) => {

        return (


            <Box sx={{ display: 'flex', gridGap: '0rem' }}>


                {model.viewButtonVisible ? <Tooltip arrow placement="left" title="">
                    <div><CustomButton ikon={<RemoveRedEye />} onClick={() => model.viewButtonClickEvent(row.original)} color="#00d017" text='view' /></div>
                </Tooltip> : <div></div>}

                {model.editButtonVisible ? <Tooltip arrow placement="left" title="">
                    <div>  <CustomButton ikon={<Edit />} onClick={() => model.editButtonClickEvent(row.original)} color="#003e77" text='edit' /></div>
                </Tooltip> : <div></div>}

                {model.deleteButtonVisible ? <Tooltip arrow placement="right" title="">
                    <div> <CustomButton ikon={<Delete />} onClick={() => { setDeleteModalState(true); setSilinecekKayit(row.original); }} color="#e93a09" text='delete' /></div>
                </Tooltip> : <div></div>}

                {model.confirmButtonVisible ? <Tooltip arrow placement="left" title="">
                    <div>  <CustomButton ikon={model.confirmButtonIcon ?? <Check />} onClick={() => model.confirmButtonClickEvent(row.original)} color="#003e77" text='confirm' />{model.confirmButtonText}</div>
                </Tooltip> : <div></div>}


            </Box>

        )
    };

    const toolbar = (table: MRT_TableInstance<any>) => {

        return (
            <Box sx={{}}>
                {model.customToolbar}

                {model.showAddButton ?
                    <Button variant="contained" color='secondary' endIcon={<Add />} onClick={() => { model.addButtonClickEvent() }}>
                        Əlavə Ədin
                    </Button>
                    : <div></div>
                }

                {table.getSelectedRowModel().flatRows.flatMap(x => x.id).length > 0
                    ? <Button color="error" variant="contained" style={{ marginLeft: "10px" }} onClick={() => {
                        const selectedRows = table.getSelectedRowModel().flatRows.flatMap(x => x.original);
                        if (selectedRows?.length > 0) {
                            model.selectedRows(selectedRows);
                        }
                    }}> Seç
                    </Button> : <div></div>}
            </Box>
        )
    };

    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

    const globalTheme = useTheme(); //(optional) if you already have a theme defined in your app root, you can import here

    const tableTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: globalTheme.palette.mode, //let's use the same dark/light mode as the global theme
                    primary: globalTheme.palette.secondary, //swap in the secondary color as the primary for the table
                    secondary: {
                        main: Url.customBg,
                    },
                    info: {
                        main: 'rgb(0,143,98)', //add in a custom color for the toolbar alert background stuff
                    },
                    background: {
                        default:
                            globalTheme.palette.mode === 'light'
                                ? '#deffc1' //random light yellow color for the background in light mode
                                : '#000', //pure black table in dark mode for fun
                    },
                },
                typography: {
                    button: {
                        textTransform: 'none', //customize typography styles for all buttons in table by default
                        fontSize: '1.2rem',
                    },
                },
                components: {
                    MuiTooltip: {
                        styleOverrides: {
                            tooltip: {
                                fontSize: '1.1rem', //override to make tooltip font size larger
                            },
                        },
                    },
                    MuiSwitch: {
                        styleOverrides: {
                            thumb: {
                                color: 'black', //change the color of the switch thumb in the columns show/hide menu to pink
                            },
                        },
                    },
                },

            }),
        [globalTheme],
    );

    const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([],);
    const [sorting, setSorting] = useState<MRT_SortingState>([]);

    useEffect(() => {
        model.paginationChanged(pagination);
    }, [pagination.pageIndex, pagination.pageSize]);

    useEffect(() => {
        model.setColumnFilterChange(columnFilters);
    }, [columnFilters]);

    useEffect(() => {
        model.setColumnSortingChange(sorting);
    }, [sorting]);




    return (
        <div style={{ borderRadius: "10px" }}>

            {deleteModalUI}
            {model.data ?
                <ThemeProvider theme={tableTheme}>
                    <MaterialReactTable

                        enableStickyHeader
                        localization={getLocalization()}
                        enableTopToolbar={model.enableTopToolbar}
                        enableFullScreenToggle={model.enableFullScreenToggle}
                        getRowId={model.rowKeyGetter}
                        onPaginationChange={setPagination}
                        manualPagination
                        enablePagination={model.enablePagination}
                        positionActionsColumn="last"
                        enableRowSelection={model.enableRowSelection}
                        enableColumnOrdering
                        enableColumnFilterModes={false}
                        enableFilters={model.enableFilters}
                        enableGrouping={model.enableGrouping}
                        enableDensityToggle={false}
                        enableColumnActions={false}
                        state={{ sorting, pagination }}
                        initialState={{ showColumnFilters: model.enableFilters, pagination: pagination, sorting: sorting, density: "compact" }}
                        enableRowActions={model.showRowActions}
                        renderRowActions={({ row, table }) => actionBoxUI(row)}
                        columns={model.columns}
                        data={model.data}
                        enableMultiRowSelection={model.enableMultipleSelection}
                        rowCount={model.totalItemsCount}
                        onGlobalFilterChange={(x: string) => { model.setSearchTextChange(x) }}
                        onColumnFiltersChange={setColumnFilters}
                        onSortingChange={setSorting}
                        enableSorting
                        positionGlobalFilter="left"
                        enableGlobalFilter={model.enableGlobalFilter}
                        muiSearchTextFieldProps={{ placeholder: `Axtarış`, sx: { minWidth: '330px' }, variant: 'outlined', }}
                        positionToolbarAlertBanner="bottom"
                        renderTopToolbarCustomActions={({ table }) => toolbar(table)}
                        muiTableBodyCellProps={({ cell }) => ({
                            onDoubleClick: (event) => {
                                model.rowDoubleClickEvent(cell.row.original);
                                model.rowDoubleClickCellHandleEvent(cell.column.id);
                            },
                            onClick: (event) => {
                                model.rowClickEvent(cell.row.original)
                            },
                            sx: {
                                borderRight: '1px solid #e0e0e0',
                                color: "black"
                            },
                        })}

                        enableMultiRemove={false}
                        enableColumnDragging={false}
                        muiTableProps={{ sx: { background: Url.customBg, color: "white" }, }}
                        muiTableHeadCellProps={{ sx: { fontWeight: 'normal', fontSize: '12px', borderRight: '1px solid ' + Url.customBg, background: Url.customBg, color: "white" }, }}
                        muiBottomToolbarProps={{ sx: { fontWeight: 'normal', fontSize: '14px', background: Url.customBg, color: "black" }, }}
                        muiTablePaginationProps={{ sx: { fontWeight: 'normal', fontSize: '14px', background: Url.customBg, color: "black" }, }}
                        muiTopToolbarProps={{ sx: { fontWeight: 'normal', fontSize: '14px', background: "white", color: "black" }, }}
                        muiTableBodyProps={{ sx: { '& tr:nth-of-type(odd)': { backgroundColor: '#e5f1fe', }, '& tr:nth-of-type(even)': { backgroundColor: '#ffffff', }, }, }}
                        muiTablePaperProps={{ elevation: 0, sx: { borderRadius: '0', border: '1px dashed #e0e0e0', }, }}
                        muiTableHeadCellFilterTextFieldProps={{ sx: { fontWeight: 'normal', fontSize: '14px', background: Url.customBg, color: "black" }, }}

                        renderDetailPanel={model.renderDetailPanel as any ?? undefined}
                    />
                </ThemeProvider>
                :
                <div>
                    {model.isBusy ? <CircularLoading /> : <div></div>}
                </div>}

        </div>
    )
}

export default GenericGrid