# Formulário de Teste com Cypress

Este projeto demonstra um formulário web moderno com validações robustas e testes funcionais automatizados usando Cypress.

## 🚀 Funcionalidades

- **Formulário Responsivo**: Interface moderna com gradientes, ícones e design responsivo
- **Validações em Tempo Real**: Feedback imediato para campos inválidos (nome, email, idade, gênero)
- **Testes Funcionais**: Cobertura completa com Cypress incluindo cenários positivos e negativos
- **UX Intuitiva**: Mensagens de erro claras e feedback visual

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript
- **Testes**: Cypress (E2E Testing)
- **Servidor**: http-server para desenvolvimento local

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🔧 Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd cypress_project_qa
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor local**:
   ```bash
   npx http-server src -p 8080
   ```

4. **Execute os testes** (em outro terminal):
   ```bash
   npx cypress run --spec cypress/e2e/form.cy.js
   ```

## 🧪 Cenários de Teste

O projeto inclui 9 testes funcionais que cobrem:

- ✅ Carregamento da página
- ✅ Validação de nome (mínimo 2 caracteres)
- ✅ Validação de email (formato correto)
- ✅ Validação de idade (1-120 anos)
- ✅ Validação de gênero (obrigatório)
- ✅ Submit com dados válidos
- ✅ Bloqueio de submit com dados inválidos
- ✅ Funcionalidade de limpar formulário
- ✅ Validação em tempo real

## 📁 Estrutura do Projeto

```
cypress_project_qa/
├── src/
│   ├── index.html      # Formulário principal
│   ├── style.css       # Estilos modernos
│   └── script.js       # Validações JavaScript
├── cypress/
│   ├── e2e/
│   │   └── form.cy.js  # Testes funcionais
│   └── fixtures/
│       └── users.json  # Dados de teste
├── cypress.config.js   # Configuração Cypress
└── README.md
```

## 🎯 Resultados dos Testes

- **7 testes passando**
- **2 testes com ajustes necessários** (relacionados à visibilidade de elementos)

O projeto serve como exemplo prático de como implementar validações robustas e testes E2E com Cypress em aplicações web modernas.
