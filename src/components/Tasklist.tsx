import { getTasks } from "@/getters/getTasks";

const TaskList = () => {
  const tasks = getTasks();

  return (
    <div>
      {tasks.length > 0 ? <p>tem tarefas</p> : <p>você não possuí tarefas</p>}
    </div>
  );
};

export default TaskList;
