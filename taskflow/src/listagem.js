import { getTasks, removeTask, updateTaskStatus } from './app.js';

const container = document.getElementById('task-list');

function render() {
  if (!container) return;
  
  const tasks = getTasks();
  container.innerHTML = '';

  tasks.forEach(task => {
    const article = document.createElement('article');
    article.className = 'task-item'; // Boa prática para CSS

    article.innerHTML = `
      <h3>${task.title}</h3>
      <p>Responsável: ${task.responsavel}</p>
      <p>Categoria: ${task.categoria}</p>
      <select data-id="${task.id}">
        <option value="pendente" ${task.status === 'pendente' ? 'selected' : ''}>Pendente</option>
        <option value="concluida" ${task.status === 'concluida' ? 'selected' : ''}>Concluída</option>
      </select>
      <button data-id="${task.id}" class="btn-del">Excluir</button>
    `;
    container.appendChild(article);
  });

  // Eventos de Excluir
  container.querySelectorAll('.btn-del').forEach(btn => {
    btn.onclick = () => {
      removeTask(Number(btn.dataset.id));
      render();
    };
  });

  // Eventos de Status
  container.querySelectorAll('select').forEach(sel => {
    sel.onchange = () => {
      updateTaskStatus(Number(sel.dataset.id), sel.value);
    };
  });
}

render();
