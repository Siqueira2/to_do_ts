import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

import { ITask } from "@/interface/Task";

import { useDispatch } from "react-redux";

import { removeTask, editTask } from "@/slices/tasksSlice";
import { open_modal } from "@/slices/modalSlice";

const TaskListItem = ({ id, title, dificulty }: ITask) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    return dispatch(open_modal());
  };

  return (
    <li className="bg-purple-300 rounded flex justify-between p-2">
      <div>
        <h3 className="font-semibold text-md">{title}</h3>

        <p className="text-sm">
          <span className="font-semibold">Dificuldade: </span>
          {dificulty}
        </p>
      </div>

      <div className="flex gap-1 items-center text-purple-600">
        <button className="w-5 h-5 hover:text-purple-700" onClick={handleEdit}>
          <FaEdit className="w-full h-full" />
        </button>

        <button
          className="w-4 h-5 hover:text-red-700"
          onClick={() => dispatch(removeTask(id))}
        >
          <FaTrashAlt className="w-full h-full" />
        </button>
      </div>
    </li>
  );
};

export default TaskListItem;
