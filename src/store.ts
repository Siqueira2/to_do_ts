import { configureStore } from "@reduxjs/toolkit";

import { taskReducer } from "@/slices/tasksSlice";
import { modalReducer } from "@/slices/modalSlice";

export const store = configureStore({
  reducer: {
    taskReducer,
    modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
