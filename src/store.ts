import { configureStore } from "@reduxjs/toolkit";

import { taskReducer } from "@/slices/tasksSlice";

export const store = configureStore({
  reducer: {
    taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
