import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ThemeSlice from '../Slices/TemaSlice';
import CourseSlice from '../Slices/CourseSlice';


export const store = configureStore({
  reducer: {
    CourseSlice: CourseSlice.reducer,
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
