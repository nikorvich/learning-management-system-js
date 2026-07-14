import { renderPagamentoAprovado } from './render.js';

export function initFinanceiroUI(lms) {
    document.getElementById('btnAssinar').addEventListener('click', () => {
        try {
            const metodo = document.getElementById('payMetodo').value;
            const pay = lms.processarPagamento(1, 149.90, metodo);
            renderPagamentoAprovado(pay);
        } catch (e) {
            alert(e.message);
        }
    });
}
