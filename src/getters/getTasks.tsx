import { useGetter } from "@/hooks/useGetter";

export const getTasks = () => useGetter((state) => state.taskReducer.tasks);
