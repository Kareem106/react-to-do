import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  theme: "dark",
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    change_theme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});
export default themeSlice.reducer;
export const {change_theme}=themeSlice.actions;