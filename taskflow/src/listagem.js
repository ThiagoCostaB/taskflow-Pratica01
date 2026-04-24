import { getTasks, saveTasks } from './app.js';

function render() {
    const list = document.getElementById('task-list');
    list.innerHTML = getTasks().map(t => `
        <li>
            <article class="task-card">
                <header>
                    <h3>${t.title}</h3>
                    <span class="tag">${t.categoria}</span>
                </header>
                <section style="margin-top:15px">
                    <p><strong>Responsável:</strong> ${t.responsavel}</p>
                </section>
                <footer class="task-footer">
                    <select onchange="window.updateStatus('${t.id}', this.value)">
                        <option value="pendente" ${t.status === 'pendente' ? 'selected' : ''}>Pendente</option>
                        <option value="concluída" ${t.status === 'concluída' ? 'selected' : ''}>Concluída</option>
                    </select>
                    <button class="btn-delete" onclick="window.remove('${t.id}')">Excluir</button>
                </footer>
            </article>
        </li>
    `).join('');
}

window.updateStatus = (id, status) => {
    const tasks = getTasks().map(t => t.id === id ? {...t, status} : t);
    saveTasks(tasks);
    render();
};

window.remove = (id) => {
    const tasks = getTasks().filter(t => t.id !== id);
    saveTasks(tasks);
    render();
};

document.addEventListener('DOMContentLoaded', render);