import Header from "@/components/Header";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

function App() {
  return (
    <main>
      <Header />

      <section>
        <h2 className="text-white font-bold text-center text-xl mb-4">
          Adicione uma tarefa:
        </h2>

        <TaskForm btn_text="Adicionar tarefa" />
      </section>

      <section className="mt-28">
        <h2 className="text-white font-bold text-center text-xl mb-4">
          Suas tarefas:
        </h2>

        <TaskList />
      </section>
    </main>
  );
}

export default App;
