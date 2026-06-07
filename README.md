# Learning Management System (LMS)

Sistema de gerenciamento de aprendizagem desenvolvido em JavaScript, permitindo a administração de cursos, conteúdos educacionais, usuários, matrículas, certificados e processamento de pagamentos.

---

## 🚀 Funcionalidades

### Módulo Acadêmico

* Cadastro de categorias e cursos.
* Organização hierárquica de conteúdo em módulos e aulas.
* Visualização dinâmica da estrutura dos cursos.

### Módulo de Usuários

* Registro de usuários.
* Simulação de matrículas em cursos.
* Geração automática de certificados.

### Módulo Financeiro

* Simulação de checkout de assinaturas.
* Suporte a múltiplos métodos de pagamento:

  * Cartão de Crédito
  * PIX
  * Boleto
* Registro e exibição de transações processadas.

---

## 🛠️ Tecnologias

* HTML5
* CSS3
* JavaScript (ES6+)
* Bootstrap 5

### Arquitetura

* Programação Orientada a Objetos (OOP)
* Gerenciamento de estado em memória
* Estrutura modular baseada em entidades de domínio

---

## 📋 Como Utilizar

### Acadêmico

1. Cadastre uma categoria.
2. Crie um curso associado à categoria.
3. Selecione o curso desejado.
4. Adicione módulos e aulas à estrutura de conteúdo.

### Usuários

1. Registre um novo usuário.
2. Selecione um usuário e um curso.
3. Realize a matrícula.
4. Visualize o certificado gerado automaticamente.

### Financeiro

1. Escolha um método de pagamento.
2. Simule a contratação da assinatura.
3. Consulte o registro da transação processada.

---

## 🏗️ Estrutura do Código

A aplicação utiliza a classe principal `LearningManagementSystem` para gerenciar o estado e as interações entre os módulos.

### Entidades

* `Usuario`
* `Curso`
* `Modulo`
* `Aula`
* `Pagamento`

### Métodos Principais

* `cadastrarCategoria()` — Criação de categorias.
* `cadastrarCurso()` — Cadastro de cursos.
* `cadastrarUsuario()` — Registro de usuários.
* `matricular()` — Vinculação de usuários a cursos e emissão de certificados.
* `processarPagamento()` — Simulação de pagamentos.
* `renderEstrutura()` — Atualização da árvore de conteúdo.
* `renderCertificados()` — Exibição dos certificados gerados.
* `updateSelectors()` — Sincronização dos campos de seleção da interface.

---

## 🎯 Objetivo

Demonstrar a implementação de um sistema educacional simplificado com gerenciamento de conteúdo, usuários e pagamentos, utilizando JavaScript puro e Bootstrap para construção da interface.
