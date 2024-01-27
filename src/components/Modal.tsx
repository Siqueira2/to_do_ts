import { useDispatch } from "react-redux";

import TaskForm from "@/components/TaskForm";

import { close_modal } from "@/slices/modalSlice";
import { editTask } from "@/slices/tasksSlice";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <div className="absolute w-screen h-screen flex justify-center items-center z-10">
      <div className="absolute z-20 container bg-white p-4 rounded">
        <h2 className="text-black font-bold text-center text-xl mb-4">
          Atualizar tarefa:
        </h2>

        <TaskForm btn_text="Atualizar tarefa" updateTask={editTask} />
      </div>
      <div
        className="bg-black w-full h-full opacity-50 absolute"
        onClick={() => {
          console.log("sadsdasd");
          dispatch(close_modal());
        }}
      ></div>
    </div>
  );
};

export default Modal;
