import { configureStore } from "@reduxjs/toolkit";

import FetchingSlice from "../FetchingSlice/FetchingSlice";

export const store = configureStore({
  reducer: {
    fetch: FetchingSlice,
  },
});
