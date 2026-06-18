import { useContext, useEffect, useState } from "react";
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

  const concluidas =
    tasks.filter(
      task => task.status === "Concluída"
    ).length;

  const pendentes =
    tasks.filter(
      task => task.status === "Pendente"
    ).length;

  return (
    <main className="container">

      <section className="hero">

        <h2>Organize suas tarefas</h2>

        <p>
          Controle simples e eficiente para seus projetos.
        </p>

      </section>

      <section className="stats-grid">

        <article className="card">
          <h3>Total</h3>
          <p className="stat-number">
            {tasks.length}
          </p>
        </article>

        <article className="card">
          <h3>Pendentes</h3>
          <p className="stat-number">
            {pendentes}
          </p>
        </article>

        <article className="card">
          <h3>Concluídas</h3>
          <p className="stat-number">
            {concluidas}
          </p>
        </article>

      </section>

      <section className="recent-tasks">

        <h2>Usuários da API</h2>

        {users.slice(0,5).map(user => (

          <p key={user.id}>
            {user.name}
          </p>

        ))}

      </section>

    </main>
  );
}

export default Home;