import { useState } from "react";
import { useContext } from "react";

import { TaskContext } from "../context/TaskContext";

function Cadastro() {

  const { addTask } =
    useContext(TaskContext);

  const [title, setTitle] =
    useState("");

  const [responsavel, setResponsavel] =
    useState("");

  const [error, setError] =
    useState("");

  function handleSubmit(e) {

    e.preventDefault();

    if (title.trim().length < 3) {

      setError(
        "O título deve possuir pelo menos 3 caracteres"
      );

      return;
    }

    addTask({
      id: Date.now(),
      title,
      responsavel,
      status: "pendente"
    });

    setTitle("");
    setResponsavel("");
    setError("");
  }

  return (
    <main className="container">

      <form
        onSubmit={handleSubmit}
        className="custom-form"
      >

        <input
          value={title}
          onChange={e =>
            setTitle(e.target.value)
          }
          placeholder="Título"
        />

        <input
          value={responsavel}
          onChange={e =>
            setResponsavel(e.target.value)
          }
          placeholder="Responsável"
        />

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="btn-primary"
        >
          Cadastrar
        </button>

      </form>

    </main>
  );
}

export default Cadastro;