import './style.css';
import { getStats } from './app.js';

const totalEl = document.getElementById('total');
if (totalEl) {
  const stats = getStats();
  document.getElementById('total').textContent = stats.total;
  document.getElementById('done').textContent = stats.concluidas;
}

import './cadastro.js';