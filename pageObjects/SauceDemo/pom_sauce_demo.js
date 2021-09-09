class sauceDemoTest{

     
    openPage(){
        cy.visit('https://www.saucedemo.com/')
    }

    // loginForm(login, pass):this => {
    //     this.loginField().click().type(login);
    //     this.passField().click().type(pass);
    //     this.submit().click();
    //     return this
    // }

    emptyLoginForm(){
       return cy.get('#login_button_container').within(() => {
            cy.get('[data-test=username]').should('be.empty')
            cy.get('[data-test=password]').should('be.empty')
            cy.get('[data-test=login-button]').click()
        })          
    }
    credentialsRequirementError(){
       return cy.get('[data-test=error]').should('be.visible')
    }
    loginFormWithSubmit(login, pass){
        cy.get('#login_button_container').within(() => {
            cy.get('[data-test=username]').click().type(login)
            cy.get('[data-test=password]').click().type(pass)
            cy.get('[data-test=login-button]').click()
        })            
    }

    sessionData(login){
        if(cy.get('.shopping_cart_link').should('be.visible')){
           return cy.window().then(win=> {
           let someItem = win.sessionStorage.setItem("session-username", `${login}`)
           someItem = win.sessionStorage.getItem("session-username", `${login}`)
           cy.wrap(someItem).should('exist')
           }
        )}
    }
    inventoryUrlCheck(){
        return cy.url()
                 .should('include', '/inventory.html')
        }
    addToCart(string){
        return cy.get(`[data-test="add-to-cart-${string}"]`)
                 .click()
    }
    isButtonChanged(){
        return cy.get('[data-test="remove-sauce-labs-backpack"]')
                 .should('be.visible')
    }
    shoppingCart(icon, badge){
        return cy.get(`.${icon}`).within(() => {
               cy.get(`.${badge}`).should('be.visible')
                 .click()
        })
    }
    isProductAdded(name){
        return cy.get(`[class="${name}"]`)
                 .should('be.visible')
    }
    checkPrice(value){
        return cy.get('[class="inventory_item_price"]')
                 .contains(value)  
    }
    checkoutClick(){
        return cy.get('[data-test=checkout]')
                 .click()
    }
    checkoutUrlCheck(){
        return cy.url()
                 .should('include', '/checkout-step-one')
    }
    isFillFormVisible(){
        return cy.get('.checkout_info')
                 .should('be.visible')
    }
    fillInFormWithData(name, surname, zip){
        cy.get('.checkout_info').within(() => {
            cy.get('[data-test=firstName]').click().type(name)
            cy.get('[data-test=lastName]').click().type(surname)
            cy.get('[data-test=postalCode]').click().type(zip)
        })            
    }
    continueButtonClick(){
        return cy.get('[data-test=continue]')
                 .click()
    }
    continueUrlCheck(){
        return cy.url()
                 .should('include', '/checkout-step-two')
        }
    clickFinish(){
        return cy.get('[data-test=finish]')
                 .click()
    }
    finishUrlCheck(){
        return cy.url()
                 .should('include', '/checkout-complete')
    }
    ifThankYouNoteIsVisible(){
        return cy.get('.complete-header')
                 .should('be.visible')
    }




}

export default sauceDemoTest