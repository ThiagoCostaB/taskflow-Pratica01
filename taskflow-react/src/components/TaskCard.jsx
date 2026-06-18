function TaskCard({ task, onDelete , onStatusChange}) {

  return (
    <article className="task-card">

      <h3>{task.title}</h3>

      <p>
        <strong>Responsável:</strong> {task.responsavel}
      </p>

      <p>
        <strong>Categoria:</strong> {task.categoria}
      </p>

      <p>
        <strong>Prioridade:</strong> {task.prioridade}
      </p>

      <div style={{ marginTop: "10px" }}>

  <strong>Status:</strong>

  <select
    value={task.status}
    onChange={(e) =>
      onStatusChange(
        task.id,
        e.target.value
      )
    }
  >

    <option value="Pendente">
      Pendente
    </option>

    <option value="Em andamento">
      Em andamento
    </option>

    <option value="Concluída">
      Concluída
    </option>

  </select>

</div>

      <p>
        <strong>Data:</strong> {task.criadoEm}
      </p>

      <button
        className="btn-delete"
        onClick={() => onDelete(task.id)}
      >
        Excluir
      </button>

    </article>
  );
}

export default TaskCard;