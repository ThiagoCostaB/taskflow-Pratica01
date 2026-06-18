import { useContext } from "react";

import TaskCard from "../components/TaskCard";

import { TaskContext } from "../context/TaskContext";

function Listagem() {

  const {
    tasks,
    deleteTask,
    updateTaskStatus
  } = useContext(TaskContext);

  return (

    <main className="container">

      <section className="task-grid">

        {tasks.map(task => (

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