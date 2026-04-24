import { getTasks } from './app.js'; 

function renderDashboard() {
    const tasks = getTasks();
    const totalElem = document.getElementById('total-count');
    const doneElem = document.getElementById('done-count');
    const recentList = document.getElementById('recent-list');

    if (totalElem) totalElem.innerText = tasks.length;
    if (doneElem) doneElem.innerText = tasks.filter(t => t.status === 'concluída').length;

    if (recentList && tasks.length > 0) {
        const lastThree = tasks.slice(-3).reverse();
        recentList.innerHTML = lastThree.map(task => `
            <li>
                <span>${task.title}</span>
                <strong class="tag">${task.categoria}</strong>
            </li>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', renderDashboard);