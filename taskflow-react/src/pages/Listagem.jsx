import { useContext, useState } from "react";

import TaskCard from "../components/TaskCard";

import { TaskContext } from "../context/TaskContext";

function Listagem() {

  const {
    tasks,
    deleteTask,
    updateTaskStatus
  } = useContext(TaskContext);

  const [filtro, setFiltro] = useState("Todos");

  const tarefasFiltradas = tasks.filter(task => {

  if (filtro === "Todos") {
    return true;
  }

  return task.status === filtro;

});

  return (

    <main className="container">

        <div className="filter-bar">

  <select
    value={filtro}
    onChange={(e) =>
      setFiltro(e.target.value)
    }
  >

    <option>
      Todos
    </option>

    <option>
      Pendente
    </option>

    <option>
      Em andamento
    </option>

    <option>
      Concluída
    </option>

  </select>

</div>

      <section className="task-grid">

        {tarefasFiltradas.map(task => (

          <TaskCard
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onStatusChange={updateTaskStatus}
          />

        ))}

      </section>

    </main>
  );
}

export default Listagem;