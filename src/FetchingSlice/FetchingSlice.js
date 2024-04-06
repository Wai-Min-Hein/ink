import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: true,
}

export const fetchingSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {
    fetchStart: (state) => {
        state.loading = true
    },
    fetchSuccess: (state) => {
        state.loading = false
    },
    fetchFail: (state) => {
        state.loading = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchStart,fetchSuccess,fetchFail } = fetchingSlice.actions

export default fetchingSlice.reducer