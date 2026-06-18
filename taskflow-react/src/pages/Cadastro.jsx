import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Cadastro() {
  const { addTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [categoria, setCategoria] = useState("");
  const [prioridade, setPrioridade] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim().length < 3) {
      setError("Título deve ter pelo menos 3 caracteres");
      return;
    }

    if (responsavel.trim().length < 2) {
      setError("Informe um responsável");
      return;
    }

    if (!categoria) {
  setError("Selecione uma categoria");
  return;
}

if (!prioridade) {
  setError("Selecione uma prioridade");
  return;
}

    addTask({
      id: Date.now(),
      title,
      responsavel,
      categoria,
      prioridade,
      status: "Pendente",
      criadoEm: new Date().toLocaleDateString("pt-BR")
    });

    setTitle("");
    setResponsavel("");
    setError("");
  }

  return (
    <main className="container">
      <form onSubmit={handleSubmit} className="custom-form">

        <h2>Nova Tarefa</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Responsável"
          value={responsavel}
          onChange={(e) => setResponsavel(e.target.value)}
        />

        <select
  value={categoria}
  onChange={(e) => setCategoria(e.target.value)}
>

  <option value="">
    Selecione uma categoria
  </option>

  <option value="Frontend">
    Frontend
  </option>

  <option value="Backend">
    Backend
  </option>

  <option value="Design">
    Design
  </option>

  <option value="Banco de Dados">
    Banco de Dados
  </option>

</select>

        <select
  value={prioridade}
  onChange={(e) => setPrioridade(e.target.value)}
>

  <option value="">
    Selecione uma prioridade
  </option>

  <option value="Alta">
    Alta
  </option>

  <option value="Média">
    Média
  </option>

  <option value="Baixa">
    Baixa
  </option>

</select>

        {error && (
          <p className="error-message">{error}</p>
        )}

        <button className="btn-primary">
          Cadastrar Tarefa
        </button>

      </form>
    </main>
  );
}

export default Cadastro;