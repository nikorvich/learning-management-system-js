export function renderEstrutura(curso) {
    const container = document.getElementById('arvoreConteudo');
    container.innerHTML = '';
    if (!curso) return;

    curso.Modulos.forEach(m => {
        container.innerHTML += `
            <div class="accordion-item">
                <h2 class="accordion-header"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#mod${m.ID_Modulo}">
                    Módulo ${m.Ordem}: ${m.Titulo}
                </button></h2>
                <div id="mod${m.ID_Modulo}" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <ul class="list-group">
                            ${m.Aulas.map(a => `<li class="list-group-item d-flex justify-content-between">
                                <span>${a.Ordem}. ${a.Titulo}</span>
                                <span class="badge bg-info text-dark">${a.TipoConteudo}</span>
                            </li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>`;
    });
}

export function renderCertificados(certificados) {
    const list = document.getElementById('listaCertificados');
    list.innerHTML = certificados.map(c => `
        <div class="list-group-item">
            <strong>Cod: ${c.CodigoVerificacao}</strong><br>
            <small>Emitido em: ${c.DataEmissao}</small>
        </div>`).join('');
}

export function renderPagamentoAprovado(pay) {
    document.getElementById('logPagamentos').innerHTML = `
        <div class="alert alert-success">
            <strong>Pagamento Aprovado!</strong><br>
            Transação: ${pay.Id_Transacao_Gateway} <br>
            Método: ${pay.MetodoPagamento} | Valor: R$ ${pay.ValorPago}
        </div>`;
}

export function updateSelectors(lms) {
    document.getElementById('curCat').innerHTML =
        '<option value="">Categoria...</option>' +
        lms.categorias.map(c => `<option value="${c.ID_Categoria}">${c.Nome}</option>`).join('');

    document.getElementById('selCurConteudo').innerHTML =
        '<option value="">Selecione o Curso</option>' +
        lms.cursos.map(c => `<option value="${c.ID_Curso}">${c.Titulo}</option>`).join('');

    document.getElementById('selUserMat').innerHTML =
        lms.usuarios.map(u => `<option value="${u.ID_Usuario}">${u.NomeCompleto}</option>`).join('');

    document.getElementById('selCurMat').innerHTML =
        lms.cursos.map(c => `<option value="${c.ID_Curso}">${c.Titulo}</option>`).join('');
}
