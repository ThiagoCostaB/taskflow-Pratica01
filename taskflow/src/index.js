import './style.css';
import { getStats } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
  const stats = getStats();

  document.getElementById('total').textContent = stats.total;
  document.getElementById('done').textContent = stats.concluidas;
});