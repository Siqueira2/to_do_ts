import { ITask } from "@/interface/Task";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TasksState {
  tasks: ITask[];
}

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTasks } = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;
