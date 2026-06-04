# EduTech Pro: Verificador de Integridade (LAB03)

Sistema de prototipagem funcional para gerenciamento de ecossistemas educacionais, incluindo estruturação de conteúdo, registro de usuários e processamento de pagamentos.

---

## 🚀 Funcionalidades Principais

* **Módulo Acadêmico**: Criação de categorias, cursos e estruturação hierárquica (Módulos > Aulas).
* **Módulo de Usuários**: Cadastro de alunos e simulação de matrículas com emissão imediata de certificados.
* **Módulo Financeiro**: Checkout de assinaturas com suporte a múltiplos métodos de pagamento (Cartão, PIX, Boleto) e log de transações.

## 🛠️ Tecnologias

* **Front-end**: HTML5, CSS3, JavaScript (ES6+).
* **Framework**: Bootstrap 5 (Layout responsivo e componentes UI).
* **Arquitetura**: Orientada a objetos (Vanilla JS) para gestão de estado em memória.

## 📋 Como utilizar

1. **Acadêmico**: Utilize o painel lateral para registrar categorias e cursos. Selecione um curso na aba à direita para adicionar módulos e aulas dinamicamente.
2. **Usuários**: Registre novos usuários na aba "Usuários & Progresso" e utilize os seletores para vincular usuários a cursos, gerando um certificado instantâneo.
3. **Financeiro**: Simule o fluxo de pagamento acessando a aba "Financeiro" e selecionando o método de pagamento desejado.

## 🏗️ Estrutura do Código

O sistema utiliza a classe principal `SistemaEduTech` para gerenciar o estado da aplicação e as interações entre os módulos:

* `Usuario`, `Curso`, `Modulo`, `Aula`, `Pagamento`: Modelos de dados.
* `renderEstrutura()`: Atualiza a interface da árvore de conteúdo em tempo real.
* `updateSelectors()`: Sincroniza os campos `<select>` baseados nos dados persistidos.
