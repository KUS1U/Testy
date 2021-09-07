class order{
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
    urlCheck(){
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
        return cy.get('[data-test=add-to-cart-sauce-labs-backpack]')
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

}
export default order