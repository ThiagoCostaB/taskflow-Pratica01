const state = JSON.parse(localStorage.getItem('taskflow_data')) || {
  tasks: [],
  nextId: 1
};

function save() {
  localStorage.setItem('taskflow_data', JSON.stringify(state));
}

export function addTask(data) {
  const task = {
    id: state.nextId++,
    status: 'pendente',
    ...data
  };
  state.tasks.push(task);
  save();
}

export function removeTask(id) {
  state.tasks = state.tasks.filter(t => t.id !== id);
  save();
}

export function updateTaskStatus(id, status) {
  const task = state.tasks.find(t => t.id === id);
  if (task) task.status = status;
  save();
}

export function getStats() {
  return {
    total: state.tasks.length,
    concluidas: state.tasks.filter(t => t.status === 'concluida').length
  };
}

export function getTasks() {
  return state.tasks;
}