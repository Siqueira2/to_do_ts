import { ITask } from "@/interface/Task";
import { ChangeEvent, FormEvent, useState } from "react";

type Props = {
  btn_text: string;
  tasklist: ITask[];
  setTasklist: React.Dispatch<React.SetStateAction<ITask[]>>;
};

const TaskForm = ({ btn_text, tasklist, setTasklist }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [dificulty, setDificulty] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) return;

    const id = Math.floor(Math.random() * 1000);

    setTasklist([...tasklist, { id, title, dificulty }]);
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
          value={dificulty}
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
