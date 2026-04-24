import { getTasks, saveTasks } from './app.js';

const form = document.getElementById('task-form');
const toast = document.getElementById('toast-success');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.getElementById('title');
    const resp = document.getElementById('responsavel');
    const errT = document.getElementById('error-title');
    const errR = document.getElementById('error-responsavel');

    errT.style.display = 'none';
    errR.style.display = 'none';
    title.classList.remove('invalid');
    resp.classList.remove('invalid');

    let isFormValid = true;

    if (!title.value.trim()) {
        errT.style.display = 'block';
        title.classList.add('invalid');
        isFormValid = false;
    }

    if (!resp.value.trim()) {
        errR.style.display = 'block';
        resp.classList.add('invalid');
        isFormValid = false;
    }

    if (isFormValid) {
        const tasks = getTasks();
        tasks.push({
            id: Date.now().toString(),
            title: title.value,
            responsavel: resp.value,
            categoria: document.getElementById('categoria').value,
            status: 'pendente'
        });
        
        saveTasks(tasks);
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
            window.location.href = 'index.html';
        }, 3000);
    }
});