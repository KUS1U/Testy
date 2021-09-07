import Order from '../../pageObjects/TC03/pom_success_order'

describe('Order', function(){
    const order = new Order()

        beforeEach(() => {
            cy.clearCookies()
            cy.setCookie('session-username', 'standard_user')
            cy.getCookie('session-username')
              .should('have.property', 'value', 'standard_user')
        });

    it('Open page', function(){
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login', function(){
        order.LoginField().should('not.be.null')
        order.PassField().should('not.be.null')
        order.submit().click()
//        order.sessionData()

    })
    it('Check url', function(){
        order.urlCheck()
    })

    it('add to cart', function(){
        order.addToCart()
    })
    it('button changed', function(){
        order.buttonChanged()
    })
    it('shopping cart icon', function(){
        order.shoppingCart()
    })
    it('is product added', function(){
        order.isProductAdded()
    })


});
