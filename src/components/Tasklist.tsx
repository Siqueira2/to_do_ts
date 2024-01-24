import { getTasks } from "@/getters/getTasks";

import TaskListItem from "@/components/TaskListItem";

const TaskList = () => {
  const tasks = getTasks();

  return (
    <div>
      {tasks.length > 0 ? (
        <ul className="container flex flex-col gap-2">
          {tasks.map((task) => (
            <TaskListItem
              key={task.id}
              title={task.title}
              dificulty={task.dificulty}
            />
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-center text-sm">
          Você não possui tarefas! :)
        </p>
      )}
    </div>
  );
};

export default TaskList;
