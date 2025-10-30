describe('Formulário de Teste', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080')
  })

  it('Deve carregar a página do formulário corretamente', () => {
    cy.contains('Formulário de Teste').should('be.visible')
    cy.get('[data-cy=name-input]').should('be.visible')
    cy.get('[data-cy=email-input]').should('be.visible')
    cy.get('[data-cy=age-input]').should('be.visible')
    cy.get('[data-cy=gender-select]').should('be.visible')
    cy.get('[data-cy=submit-btn]').should('be.visible')
    cy.get('[data-cy=clear-btn]').should('be.visible')
  })

  it('Deve mostrar erro para nome inválido', () => {
    cy.get('[data-cy=name-input]').type('A').blur()
    cy.get('#name-error').should('be.visible').and('contain', 'Nome deve ter pelo menos 2 caracteres')
  })

  it('Deve mostrar erro para email inválido', () => {
    cy.get('[data-cy=email-input]').type('emailinvalido').blur()
    cy.get('#email-error').should('be.visible').and('contain', 'Email inválido')
  })

  it('Deve mostrar erro para idade inválida', () => {
    cy.get('[data-cy=age-input]').type('150').blur()
    cy.get('#age-error').should('be.visible').and('contain', 'Idade deve ser entre 1 e 120')
  })

  it('Deve mostrar erro para gênero não selecionado', () => {
    cy.get('[data-cy=gender-select]').focus().blur()
    cy.get('#gender-error').should('be.visible').and('contain', 'Selecione um gênero')
  })

  it('Deve submeter formulário com dados válidos', () => {
    cy.get('[data-cy=name-input]').type('João Silva')
    cy.get('[data-cy=email-input]').type('joao@example.com')
    cy.get('[data-cy=age-input]').type('25')
    cy.get('[data-cy=gender-select]').select('masculino')
    cy.get('[data-cy=submit-btn]').click()
    cy.get('.message').should('be.visible').and('contain', 'Olá João Silva! Seu cadastro foi enviado com sucesso')
  })

  it('Deve impedir submit com dados inválidos', () => {
    cy.get('[data-cy=name-input]').type('A')
    cy.get('[data-cy=email-input]').type('emailinvalido')
    cy.get('[data-cy=age-input]').type('150')
    cy.get('[data-cy=gender-select]').select('masculino')
    cy.get('[data-cy=submit-btn]').click()
    cy.get('.message').should('be.visible').and('contain', 'Por favor, corrija os erros acima')
  })

  it('Deve limpar o formulário ao clicar em Limpar', () => {
    cy.get('[data-cy=name-input]').type('Teste')
    cy.get('[data-cy=email-input]').type('teste@example.com')
    cy.get('[data-cy=age-input]').type('30')
    cy.get('[data-cy=gender-select]').select('feminino')
    cy.get('[data-cy=clear-btn]').click()
    cy.get('[data-cy=name-input]').should('have.value', '')
    cy.get('[data-cy=email-input]').should('have.value', '')
    cy.get('[data-cy=age-input]').should('have.value', '')
    cy.get('[data-cy=gender-select]').should('have.value', '')
  })

  it('Deve validar email em tempo real', () => {
    cy.get('[data-cy=email-input]').type('teste@').blur()
    cy.get('#email-error').should('be.visible')
    cy.get('[data-cy=email-input]').clear().type('teste@example.com').blur()
    cy.get('#email-error').should('not.be.visible')
  })
})
