import { updateSelectors, renderEstrutura } from './render.js';

export function initCursoUI(lms) {
    document.getElementById('btnSalvarCategoria').addEventListener('click', () => {
        try {
            const nome = document.getElementById('catNome').value;
            const desc = document.getElementById('catDesc').value;
            lms.cadastrarCategoria(nome, desc);
            updateSelectors(lms);
            alert("Categoria Criada");
        } catch (e) {
            alert(e.message);
        }
    });

    document.getElementById('btnSalvarCurso').addEventListener('click', () => {
        try {
            const catId = document.getElementById('curCat').value;
            const titulo = document.getElementById('curTitulo').value;
            const nivel = document.getElementById('curNivel').value;
            lms.cadastrarCurso(titulo, catId, nivel);
            updateSelectors(lms);
            alert("Curso Criado");
        } catch (e) {
            alert(e.message);
        }
    });

    document.getElementById('selCurConteudo').addEventListener('change', (e) => {
        const cursoId = e.target.value;
        const curso = lms.cursos.find(c => c.ID_Curso == cursoId);
        renderEstrutura(curso);
    });

    document.getElementById('btnAddModulo').addEventListener('click', () => {
        try {
            const cursoId = document.getElementById('selCurConteudo').value;
            lms.addModulo(cursoId);
            const curso = lms.cursos.find(c => c.ID_Curso == cursoId);
            renderEstrutura(curso);
        } catch (e) {
            alert(e.message);
        }
    });

    document.getElementById('btnAddAula').addEventListener('click', () => {
        try {
            const cursoId = document.getElementById('selCurConteudo').value;
            lms.addAula(cursoId);
            const curso = lms.cursos.find(c => c.ID_Curso == cursoId);
            renderEstrutura(curso);
        } catch (e) {
            alert(e.message);
        }
    });
}
