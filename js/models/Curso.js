export class Curso {
    constructor(id, titulo, catId, nivel) {
        this.ID_Curso = id;
        this.Titulo = titulo;
        this.ID_Categoria = catId;
        this.Nivel = nivel;
        this.Modulos = [];
    }
}
