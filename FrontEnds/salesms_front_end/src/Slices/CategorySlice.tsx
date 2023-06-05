import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GenericApiResultModel, GenericApiResultModelWithPagination } from "../Models/Generic/ApiResultModel";
import { RequestDataWithPaginationModel } from "../Models/Generic/RequestDataWithPaginationModel";
import { CategoryModel } from "../Models/Course/CategoryModel";
import CategoryManager from "../Managers/CategoryManager";


interface CategorySliceModel {
  pageIndex: number;
  itemsCount: number;
  isBusy: boolean;
  Categorys: CategoryModel[]
  errorMessage: string;
}
export const AsyncGetAllCategorys = createAsyncThunk("CategorySlice/AsyncGetKullanicininAktifCategoryi", async (model: RequestDataWithPaginationModel) => {

  var request = await CategoryManager.GetAll(model);
  return request;
}
);

const CategorySlice = createSlice({
  name: "CategorySlice",
  initialState: {} as CategorySliceModel,

  reducers: {
    bos: (state, action) => { },
  },
  extraReducers: (builder) => (
    builder
      .addCase(AsyncGetAllCategorys.pending, (state, action) => {
        state.isBusy = true;
      })
      .addCase(
        AsyncGetAllCategorys.fulfilled,
        (state, action) => {
          state.isBusy = false;
          const result = action.payload as GenericApiResultModelWithPagination<CategoryModel>;

          if (result.isSuccess) {

            state.pageIndex = result.pageIndex;
            state.itemsCount = result.itemsCount;
            state.Categorys = result.data as CategoryModel[];
            state.isBusy = false;
            state.errorMessage = "";

          } else {
            state.errorMessage = result.message;
          }
        }
      )
      .addCase(AsyncGetAllCategorys.rejected, (state, action) => {
        state.isBusy = false;
        state.errorMessage = "There is an exception while getting the Categories!";
      })
  ),
});

export const { bos } = CategorySlice.actions;
export default CategorySlice;
