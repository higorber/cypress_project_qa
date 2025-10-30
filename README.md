# Formulário de Teste com Cypress

Este projeto demonstra um formulário web validações e testes funcionais automatizados usando **Cypress**.

## Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/higorber/cypress_project_qa
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

## Cenários de Teste

O projeto inclui 9 testes funcionais que cobrem:

- Carregamento da página
- Validação de nome (mínimo 2 caracteres)
- Validação de email (formato correto)
- Validação de idade (1-120 anos)
- Validação de gênero (obrigatório)
- Submit com dados válidos
- Bloqueio de submit com dados inválidos
- Funcionalidade de limpar formulário
- Validação em tempo real
