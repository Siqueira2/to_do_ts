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

    editTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.map((task: ITask) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
    },

    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task: ITask) => {
        return task.id !== action.payload;
      });
    },
  },
});

export const { addTasks, editTask, removeTask } = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;
