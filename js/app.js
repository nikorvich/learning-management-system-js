import { LearningManagementSystem } from './services/LearningManagementSystem.js';
import { initCursoUI } from './ui/cursos.js';
import { initUsuarioUI } from './ui/usuarios.js';
import { initFinanceiroUI } from './ui/financeiro.js';

const lms = new LearningManagementSystem();

document.addEventListener('DOMContentLoaded', () => {
    initCursoUI(lms);
    initUsuarioUI(lms);
    initFinanceiroUI(lms);
});
