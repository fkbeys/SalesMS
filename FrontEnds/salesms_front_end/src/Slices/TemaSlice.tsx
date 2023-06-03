import { createSlice } from "@reduxjs/toolkit";

interface ThemeSliceModel {

    currentTheme: string
}


const ThemeSlice = createSlice({
    name: "ThemeSlice",
    initialState: {} as ThemeSliceModel,

    reducers: {

        temaDegis: (state) => {
            if (state.currentTheme === "dark") {
                state.currentTheme = "light";
            } else {
                state.currentTheme = "dark";
            }
        },
    }
});


export const { temaDegis } = ThemeSlice.actions;
export default ThemeSlice;  