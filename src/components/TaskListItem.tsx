import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

type Props = {
  title: string;
  dificulty: number | null;
};

const TaskListItem = ({ title, dificulty }: Props) => {
  return (
    <li className="bg-purple-300 rounded flex justify-between p-2">
      <div>
        <h3 className="font-semibold text-md">{title}</h3>

        <p className="text-sm">
          <span className="font-semibold">Dificuldade: </span>
          {dificulty}
        </p>
      </div>

      <div className="flex gap-1">
        <button>
          <FaEdit />
        </button>

        <button>
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default TaskListItem;
