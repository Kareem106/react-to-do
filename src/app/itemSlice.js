import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    changeItemStatus: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      item.status = !item.status;
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export default itemSlice.reducer;
export const { addItem, changeItemStatus, removeItem } = itemSlice.actions;
