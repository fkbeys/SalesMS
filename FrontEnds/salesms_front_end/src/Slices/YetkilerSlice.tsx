import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GenericApiResultModel } from "../Models/Generic/ApiResultModel";
import { YetkilerModel } from "../Models/YetkilerModel";

interface YetkilerSliceModel {
  pageIndex: number;
  itemsCount: number;
  isBusy: boolean;
  errorMessage: string;
}
export const AsyncGetKullanicininAktifYetkileri = createAsyncThunk(
  "YetkilerSlice/AsyncGetKullanicininAktifYetkileri",
  async (int: number) => {
    return {} as GenericApiResultModel<YetkilerModel>;
  }
);

const YetkilerSlice = createSlice({
  name: "YetkilerSlice",
  initialState: {} as YetkilerSliceModel,

  reducers: {
    bos: (state, action) => { },
  },
  extraReducers: (builder) => (
    builder
      .addCase(AsyncGetKullanicininAktifYetkileri.pending, (state, action) => {
        state.isBusy = true;
      })
      .addCase(
        AsyncGetKullanicininAktifYetkileri.fulfilled,
        (state, action) => {
          state.isBusy = false;
          const result = action.payload as GenericApiResultModel<YetkilerModel>;

          if (result.isSuccess) {

          } else {
            state.errorMessage = result.message;
          }
        }
      )
      .addCase(AsyncGetKullanicininAktifYetkileri.rejected, (state, action) => {
        state.isBusy = false;
        state.errorMessage = "Səlahiyyətlərdə bir xəta baş verdi!";
      })
  ),
});

export const { bos } = YetkilerSlice.actions;
export default YetkilerSlice;
