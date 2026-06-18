import { useContext } from "react";
import { useEffect, useState } from "react";

import { TaskContext } from "../context/TaskContext";
import { api } from "../services/api";

function Home() {

  const { tasks } = useContext(TaskContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {

    api.get("/users")
      .then(response => {
        setUsers(response.data);
      });

  }, []);

  return (
    <main className="container">

      <section className="hero">

        <h2>Organize suas tarefas</h2>

        <p>
          Total de tarefas:
          {" "}
          {tasks.length}
        </p>

      </section>

      <section>

        <h2>Usuários da API</h2>

        {users.slice(0, 3).map(user => (

          <p key={user.id}>
            {user.name}
          </p>

        ))}

      </section>

      <section className="stats-grid">

  <article className="card total">
    <h3>Total</h3>
    <p className="stat-number">
      {tasks.length}
    </p>
  </article>

  <article className="card concluidas">
    <h3>Concluídas</h3>
    <p className="stat-number">
      {
        tasks.filter(
          task => task.status === "Concluída"
        ).length
      }
    </p>
  </article>

</section>

    </main>
  );
}

export default Home;