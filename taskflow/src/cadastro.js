import { addTask } from './app.js';

const form = document.getElementById('task-form');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const responsavel = document.getElementById('responsavel').value;
    const categoria = document.getElementById('categoria').value;

    if (!title || !responsavel) {
      alert("Preencha os campos!");
      return;
    }

    addTask({ title, responsavel, categoria });
    alert("Cadastrado!");
    form.reset();
  });
}