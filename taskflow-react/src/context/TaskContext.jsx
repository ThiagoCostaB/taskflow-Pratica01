import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tarefas")) || []
  );

  function addTask(task) {

    const updatedTasks = [...tasks, task];

    setTasks(updatedTasks);

    localStorage.setItem(
      "tarefas",
      JSON.stringify(updatedTasks)
    );
  }

  function deleteTask(id) {

    const updatedTasks =
      tasks.filter(task => task.id !== id);

    setTasks(updatedTasks);

    localStorage.setItem(
      "tarefas",
      JSON.stringify(updatedTasks)
    );
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}