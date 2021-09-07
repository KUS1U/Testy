class order{
    openPage(){
        cy.visit('https://www.saucedemo.com/')
    }

    restoreCookies(){
        beforeEach(() => {
            cy.clearCookies()
            cy.setCookie('session-username', 'standard_user')
            cy.getCookie('session-username')
              .should('have.property', 'value', 'standard_user')
        });
    }

    LoginField(){
        return cy.get('[data-test=username]').click()
                 .type('standard_user')
    }
    PassField(){
        return cy.get('[data-test=password]')
                 .type('secret_sauce')
    }
    submit(){
        return cy.get('[data-test=login-button]')
                 .should('not.be.disabled')
    }
    inventoryUrlCheck(){
        return cy.url()
                 .should('include', '/inventory.html')
    }

//    sessionData(){
//        if(cy.get('.shopping_cart_link').should('be.visible')){
//           return cy.window().then(win=> {
//           let someItem = win.sessionStorage.setItem("session-username", 'standard_user')
//           someItem = win.sessionStorage.getItem("session-username", 'standard_user')
//           cy.wrap(someItem).should('exist')
//           }
//        )}
//    }

    addToCart(){
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
                 .click()
    }
    buttonChanged(){
        return cy.get('[data-test=remove-sauce-labs-backpack]')
                 .should('be.visible')
    }
    shoppingCart(){
        return cy.get('[class="shopping_cart_link"]')
                 .contains('1')
                 .click()
    }
    isProductAdded(){
        return cy.get('[class="inventory_item_name"]')
                 .should('be.visible')
    }
    checkPrice(){
        return cy.get('[class="inventory_item_price"]')
                 .should('contain', '29.99')
    }
    checkoutClick(){
        return cy.get('[data-test=checkout]')
                 .click()
    }
    ifFillFormVisible(){
        return cy.get('.checkout_info')
                 .should('be.visible')
    }
    checkoutUrlCheck(){
        return cy.url()
                 .should('include', '/checkout-step-one')
    }
    firstNameFill(){
        return cy.get('[data-test=firstName]')
                 .click()
                 .type('fist')
    }
    lastNameFill(){
        return cy.get('[data-test=lastName]')
                 .click()
                 .type('last')
    }
    postalFill(){
        return cy.get('[data-test=postalCode]')
                 .click()
                 .type('000')
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

export default order
