export class Modulo {
    constructor(id, cursoId, titulo, ordem) {
        this.ID_Modulo = id;
        this.ID_Curso = cursoId;
        this.Titulo = titulo;
        this.Ordem = ordem;
        this.Aulas = [];
    }
}
