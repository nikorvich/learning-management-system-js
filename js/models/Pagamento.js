export class Pagamento {
    constructor(id, assinId, valor, metodo) {
        this.ID_Pagamento = id;
        this.ID_Assinatura = assinId;
        this.ValorPago = valor;
        this.MetodoPagamento = metodo;
        this.Id_Transacao_Gateway = "GW-" + Math.random().toString(36).substr(2, 9).toUpperCase();
        this.DataPagamento = new Date().toLocaleString();
    }
}
