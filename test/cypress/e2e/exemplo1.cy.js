/// <reference types= "cypress"/> 

describe('Criando cenario de teste ', () => {
    it('Registrando um usuario no site com sucesso', () => {
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
      cy.get('.btn-link').click()
      cy.get('#firstName').type('inatel')
      cy.get('#Text1').type('inatel')
      cy.get('#username').type('inatel')
      cy.get('#password').type('inatel')
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should('contain.text','Registration successful')
    })
    it('Registrando um usuario no site com falha', () => {
        cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('.btn-link').click()
        cy.get('#firstName').type('inatel')
        cy.get('#Text1').type('inatel')
        cy.get('#username').type('inatel')
        cy.get('#password').type('inatel')
        cy.get('#password').clear()
        cy.get('.has-error > .help-block').should('have.text','Password is required')
        cy.get('.btn-primary').should('be.disabled')
      })
      it('Registrando um usuario no site com sucesso usando fuction', () => {
        criarUsuario()
      })
      it('Registrando um usuario no site com erro usando fuction', () => {
        criarUsuarioErrado()
      })


  })    

  function criarUsuario(){
    let horas = new Date().getHours().toString() 
    let minutos = new Date().getMinutes().toString()
    let seg = new Date().getSeconds().toString()
    let user = horas + minutos + seg + 'id'
    let senha = horas + minutos + seg + 'senha'
    let userInfo = [user, senha]

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type(user)
    cy.get('#Text1').type(user)
    cy.get('#username').type(user)
    cy.get('#password').type(senha)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text','Registration successful')

    return userInfo
  }

  function criarUsuarioErrado(){
    let horas = new Date().getHours().toString() 
    let minutos = new Date().getMinutes().toString()
    let seg = new Date().getSeconds().toString()
    let user = horas + minutos + seg + 'id'
    let senha = horas + minutos + seg + 'senha'
    let userInfo = [user, senha]

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type(user)
    cy.get('#Text1').type(user)
    cy.get('#username').type(user)
    cy.get('#password').type(senha)
    cy.get('#password').clear()   
    cy.get('.has-error > .help-block').should('have.text','Password is required')
    cy.get('.btn-primary').should('be.disabled')
    return userInfo
  }