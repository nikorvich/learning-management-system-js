export class Certificado {
    constructor(uId, cId) {
        this.ID_Certificado = 'CERT-' + Math.floor(Math.random() * 10000);
        this.ID_Usuario = uId;
        this.ID_Curso = cId;
        this.CodigoVerificacao = Math.random().toString(36).toUpperCase().substring(2, 10);
        this.DataEmissao = new Date().toLocaleDateString();
    }
}
