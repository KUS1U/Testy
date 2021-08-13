import Submit from '../../pageObjects/TC01/pom_login_form_validation'

describe('Submit empty form', function () {
	it('Open page', function () {
		cy.visit('https://www.saucedemo.com/')
          .wait(1000)

	cy.get('#login-button').click()
      .get('[data-test=error]').should('be.visible')
	});
});