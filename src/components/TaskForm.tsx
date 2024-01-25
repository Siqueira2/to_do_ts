import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { ITask } from "@/interface/Task";

import { addTasks } from "@/slices/tasksSlice";

type Props = {
  btn_text: string;
  updateTask?: CallableFunction;
};

const TaskForm = ({ btn_text, updateTask }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [dificulty, setDificulty] = useState<number | null>(null);

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (updateTask) {
      dispatch(updateTask({ title, dificulty }));
    } else {
      if (!title || !dificulty) return;

      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = { id, title, dificulty };

      dispatch(addTasks(newTask));
    }

    setTitle("");
    setDificulty(null);
  };

  return (
    <form
      className="flex flex-col gap-2 items-center container"
      onSubmit={handleSubmit}
    >
      <label className="w-full">
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Pense em um bom título"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      </label>

      <label className="w-full">
        <input
          type="number"
          min={0}
          value={dificulty || ""}
          name="dificulty"
          placeholder="Nível de dificuldade"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDificulty(parseInt(e.target.value))
          }
        />
      </label>

      <button className="btn text-white font-semibold" type="submit">
        {btn_text}
      </button>
    </form>
  );
};

export default TaskForm;
