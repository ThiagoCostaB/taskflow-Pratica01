export const getTasks = () => JSON.parse(localStorage.getItem('tarefas')) || [];
export const saveTasks = (tasks) => localStorage.setItem('tarefas', JSON.stringify(tasks));