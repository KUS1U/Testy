class login{

    LoginField(){
        return cy.get('[data-test=username]').click()
                 .type('standard_user')
    }
    PassField(){
        return cy.get('[data-test=password]')
                 .type('secret_sauce')
    }
    urlCheck(){
        return cy.url().should('equal', 'https://www.saucedemo.com/inventory.html')
    }
    submit(){
        return cy.get('[data-test=login-button]').should('not.be.disabled')
    }
    sessionData(){
        if(cy.get('.shopping_cart_link').should('be.visible')){
           return cy.window().then(win=> {
           let someItem = win.sessionStorage.setItem("session-username", 'standard_user')
           someItem = win.sessionStorage.getItem("session-username", 'standard_user')
           cy.wrap(someItem).should('exist')
           }
        )}
    }
}
export default login