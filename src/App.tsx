import Header from "@/components/Header";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import Modal from "@/components/Modal";

import { getModal } from "@/getters/getModal";

function App() {
  const modal = getModal();

  return (
    <>
      {modal && <Modal />}
      <main className={modal ? "blur-sm" : ""}>
        <Header />

        <section>
          <h2 className="text-white font-bold text-center text-xl mb-4">
            Adicione uma tarefa:
          </h2>

          <div className="container">
            <TaskForm btn_text="Adicionar tarefa" />
          </div>
        </section>

        <section className="mt-28">
          <h2 className="text-white font-bold text-center text-xl mb-4">
            Suas tarefas:
          </h2>

          <TaskList />
        </section>
      </main>
    </>
  );
}

export default App;
