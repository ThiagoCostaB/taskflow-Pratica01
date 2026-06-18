function TaskCard({
  task,
  onDelete
}) {

  return (

    <article className="task-card">

      <h3>{task.title}</h3>

      <p>
        Responsável:
        {" "}
        {task.responsavel}
      </p>

      <button
        onClick={() =>
          onDelete(task.id)
        }
      >
        Excluir
      </button>

    </article>

  );
}

export default TaskCard;