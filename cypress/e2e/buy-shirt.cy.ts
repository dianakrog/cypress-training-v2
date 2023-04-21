describe('Buy a black t-shirt', () => {
  it('then the t-shirt should be bought', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.login-box > form > div > input#user-name').type('standard_user')
    cy.get('.login-box > form > div > input#password').type('secret_sauce')
    cy.get("input[type='submit']").click()
    cy.get('#item_1_img_link').click()
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    cy.get('#shopping_cart_container > a').click()
    cy.get('#checkout').click()
    cy.get('#first-name').type('Cypress')
    cy.get('#last-name').type('Workshop')
    cy.get('#postal-code').type('00000')
    cy.get('#continue').click()
    cy.get('#finish').click()
    cy.get('#contents_wrapper > .checkout_complete_container > h2').should(
      'have.text',
      'Thank you for your order!'
    )
  })
})
