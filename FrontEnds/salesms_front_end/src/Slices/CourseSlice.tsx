import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GenericApiResultModel, GenericApiResultModelWithPagination } from "../Models/Generic/ApiResultModel";
import { CourseModel } from "../Models/Course/CourseModel";
import CourseManager from "../Managers/CourseManager";
import { RequestDataWithPaginationModel } from "../Models/Generic/RequestDataWithPaginationModel";


interface CourseSliceModel {
  pageIndex: number;
  itemsCount: number;
  isBusy: boolean;
  courses: CourseModel[]
  errorMessage: string;
}
export const AsyncGetAllCourses = createAsyncThunk("CourseSlice/AsyncGetKullanicininAktifCoursei", async (model: RequestDataWithPaginationModel) => {

  var request = await CourseManager.GetAll(model);
  return request;
}
);

const CourseSlice = createSlice({
  name: "CourseSlice",
  initialState: {} as CourseSliceModel,

  reducers: {
    bos: (state, action) => { },
  },
  extraReducers: (builder) => (
    builder
      .addCase(AsyncGetAllCourses.pending, (state, action) => {
        state.isBusy = true;
      })
      .addCase(
        AsyncGetAllCourses.fulfilled,
        (state, action) => {
          state.isBusy = false;
          const result = action.payload as GenericApiResultModelWithPagination<CourseModel>;

          if (result.isSuccess) {

            state.pageIndex = result.pageIndex;
            state.itemsCount = result.itemsCount;
            state.courses = result.data as CourseModel[];
            state.isBusy = false;
            state.errorMessage = "";

          } else {
            state.errorMessage = result.message;
          }
        }
      )
      .addCase(AsyncGetAllCourses.rejected, (state, action) => {
        state.isBusy = false;
        state.errorMessage = "There is an exception while getting the courses!";
      })
  ),
});

export const { bos } = CourseSlice.actions;
export default CourseSlice;
