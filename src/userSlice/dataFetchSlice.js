import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorMessage: null,
  loading: false
  
};

export const dataFetch = createSlice({
  name: "dataFetch",
  initialState,
  reducers: {
    dataFetchStart: (state) => {
      state.loading = true;
      state.errorMessage = null;
    },
    dataFetchSuccess: (state) => {
      state.loading = false;
      state.errorMessage = null;
    },
    dataFetchFailure: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { dataFetchStart, dataFetchSuccess, dataFetchFailure } = dataFetch.actions;

export default dataFetch.reducer;
