describe('Testing acccess to Litmus portal', () => {
  it('Visits the Litmus portal website', () => {
    cy.visit('0.0.0.0:3000')
  })
})

describe('Home page component visiblity', () => {
  before('Visits the Litmus portal website', () => {
    cy.visit('0.0.0.0:3000')
  })

  it('Testing title visiblity', () => {
    cy.title().should('include', 'Litmus Portal');
  })

  it('Testing login visibility', () => {
    cy.get(':nth-child(1) > .bg-orange').should('be.visible');
  })

  it('Testing signup visibility', () => {
    cy.get(':nth-child(1) > .bg-grey-darker').should('be.visible');
  })

  it('Testing backgroud visibility', () => {
    cy.get('[tabindex="-1"] > .bg-grey-darkest').should('be.visible');
  })

})

describe('Testing signup visibility/fuctionality', () => {
  before('Visits the Litmus portal website', () => {
    cy.visit('0.0.0.0:3000')
  })

  it('Testing click on signup', () => {
    cy.get(':nth-child(1) > .bg-grey-darker').click();
  })

  it('Testing click sign up form visibility', () => {
    cy.get('.bg-white').should('be.visible');
  })

  it('Testing header on the signup form', () => {
    cy.get('h3.mb-4').should('be.visible');
  })

  it('Testing full name field visibility', () => {
    cy.get(':nth-child(3) > .Login_input__1Ucqt').should('be.visible');
  })

  it('Testing email field visibility', () => {
    cy.get(':nth-child(4) > .Login_input__1Ucqt').should('be.visible');
  })
  
  it('Testing email field visibility', () => {
    cy.get(':nth-child(4) > .Login_input__1Ucqt').should('be.visible');
  })

  it('Testing password field visibility', () => {
    cy.get(':nth-child(5) > .Login_input__1Ucqt').should('be.visible');
  })

  it('Testing login link from sign up', () => {
    cy.get('.text-orange').click();
  })  
  
})

describe('Testing login visibility/fuctionality', () => {
  before('Visits the Litmus portal website', () => {
    cy.visit('0.0.0.0:3000')
  })

  it('Testing login button', () => {
    cy.get(':nth-child(1) > .bg-orange').click();
  })

  it('Testing click login form visibility', () => {
    cy.get('.bg-white').should('be.visible');
  })


  it('Testing header on the login form', () => {
    cy.get('h3.mb-4').should('be.visible');
  })
  
  it('Testing full name field visibility', () => {
    cy.get(':nth-child(3) > .Login_input__1Ucqt').should('be.visible');
  })

  it('Testing email field visibility', () => {
    cy.get(':nth-child(4) > .Login_input__1Ucqt').should('be.visible');
  })
  
  it('Testing signup button', () => {
    cy.get('.py-2').should('be.visible');
  })

  it('Testing signup link from login page', () => {
    cy.get('.text-orange').click();
  })  
  
})

