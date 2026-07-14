import { Categoria } from '../models/Categoria.js';
import { Curso } from '../models/Curso.js';
import { Modulo } from '../models/Modulo.js';
import { Aula } from '../models/Aula.js';
import { Usuario } from '../models/Usuario.js';
import { Certificado } from '../models/Certificado.js';
import { Pagamento } from '../models/Pagamento.js';

export class LearningManagementSystem {
    constructor() {
        this.usuarios = [];
        this.categorias = [];
        this.cursos = [];
        this.pagamentos = [];
        this.certificados = [];
    }

    cadastrarCategoria(nome, descricao) {
        if (!nome) throw new Error("Nome obrigatório");
        const categoria = new Categoria(Date.now(), nome, descricao);
        this.categorias.push(categoria);
        return categoria;
    }

    cadastrarCurso(titulo, catId, nivel) {
        if (!catId || !titulo) throw new Error("Preencha todos os campos");
        const curso = new Curso(Date.now(), titulo, catId, nivel);
        this.cursos.push(curso);
        return curso;
    }

    addModulo(cursoId) {
        const curso = this.cursos.find(c => c.ID_Curso == cursoId);
        if (!curso) throw new Error("Curso não encontrado");
        const mod = new Modulo(Date.now(), cursoId, `Módulo ${curso.Modulos.length + 1}`, curso.Modulos.length + 1);
        curso.Modulos.push(mod);
        return mod;
    }

    addAula(cursoId) {
        const curso = this.cursos.find(c => c.ID_Curso == cursoId);
        if (!curso || curso.Modulos.length === 0) throw new Error("Crie um módulo primeiro");
        const mod = curso.Modulos[curso.Modulos.length - 1];
        const aula = new Aula(Date.now(), mod.ID_Modulo, `Aula ${mod.Aulas.length + 1}`, mod.Aulas.length + 1);
        mod.Aulas.push(aula);
        return aula;
    }

    cadastrarUsuario(nome, email, senha) {
        if (!nome || !email || !senha) throw new Error("Preencha todos os dados do usuário");
        const u = new Usuario(Date.now(), nome, email, senha);
        this.usuarios.push(u);
        return u;
    }

    matricular(uId, cId) {
        if (!uId || !cId) throw new Error("Selecione o usuário e o curso");
        const cert = new Certificado(uId, cId);
        this.certificados.push(cert);
        return cert;
    }

    processarPagamento(assinId, valor, metodo) {
        if (!metodo) throw new Error("Método de pagamento inválido");
        const pay = new Pagamento(Date.now(), assinId, valor, metodo);
        this.pagamentos.push(pay);
        return pay;
    }
}
