import { updateSelectors, renderCertificados } from './render.js';

export function initUsuarioUI(lms) {
    document.getElementById('btnRegistrarUsuario').addEventListener('click', () => {
        try {
            const nome = document.getElementById('uNome').value;
            const email = document.getElementById('uEmail').value;
            const senha = document.getElementById('uSenha').value;
            lms.cadastrarUsuario(nome, email, senha);
            updateSelectors(lms);
            alert("Usuário registrado no sistema");
        } catch (e) {
            alert(e.message);
        }
    });

    document.getElementById('btnMatricular').addEventListener('click', () => {
        try {
            const uId = document.getElementById('selUserMat').value;
            const cId = document.getElementById('selCurMat').value;
            lms.matricular(uId, cId);
            renderCertificados(lms.certificados);
            alert("Matrícula vinculada e certificado gerado");
        } catch (e) {
            alert(e.message);
        }
    });
}
