import TaskForm from "@/components/TaskForm";

const Modal = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      <div className="bg-black opacity-40 absolute"></div>
      <div className="absolute z-10 container bg-white p-4 rounded">
        <TaskForm btn_text="Atualizar tarefa" />
      </div>
    </div>
  );
};

export default Modal;
