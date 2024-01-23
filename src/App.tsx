import { useState } from "react";

import { ITask } from "@/interface/Task";

import Header from "@/components/Header";
import TaskForm from "@/components/TaskForm";
import Tasklist from "@/components/Tasklist";

function App() {
  const [tasklist, setTasklist] = useState<ITask[]>([]);

  return (
    <main>
      <Header />

      <section>
        <h2 className="text-white font-bold text-center text-xl mb-4">
          Adicione uma tarefa:
        </h2>

        <TaskForm
          btn_text="Adicionar tarefa"
          tasklist={tasklist}
          setTasklist={setTasklist}
        />
      </section>

      <section className="mt-28">
        <h2 className="text-white font-bold text-center text-xl mb-4">
          Suas tarefas:
        </h2>

        <Tasklist />
      </section>
    </main>
  );
}

export default App;
