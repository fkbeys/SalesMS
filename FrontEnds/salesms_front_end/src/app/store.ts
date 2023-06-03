import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import YetkilerSlice from '../Slices/YetkilerSlice';
import ThemeSlice from '../Slices/TemaSlice';


export const store = configureStore({
  reducer: {
    YetkilerSlice: YetkilerSlice.reducer,
    ThemeSlice: ThemeSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
