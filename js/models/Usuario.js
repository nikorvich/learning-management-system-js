export class Usuario {
    constructor(id, nome, email, senha) {
        this.ID_Usuario = id;
        this.NomeCompleto = nome;
        this.Email = email;
        this.SenhaHash = btoa(senha);
        this.DataCadastro = new Date().toISOString();
    }
}
