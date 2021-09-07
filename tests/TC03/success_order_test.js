import Order from '../../pageObjects/TC03/pom_success_order'

describe('Order', function(){
    const order = new Order()

    order.restoreCookies();

    it('Open page', function(){
        order.openPage();
    })

    it('Login', function(){
        order.LoginField().should('not.be.null')
        order.PassField().should('not.be.null')
        order.submit().click()
//        order.sessionData()
        order.inventoryUrlCheck()
    })

    it('add to cart', function(){
        order.addToCart();
        order.buttonChanged();
        order.shoppingCart();
        order.isProductAdded();
        order.checkPrice();
    })

    it('checkout', function(){
        order.checkoutClick();
        order.checkoutUrlCheck();
        order.ifFillFormVisible()
    })

    it('Fill in form', function(){
        order.firstNameFill();
        order.lastNameFill();
        order.postalFill();
        order.continueButtonClick();
        order.continueUrlCheck();

    })

    it('Confirm order', function(){
        order.clickFinish();
        order.finishUrlCheck();
        order.ifThankYouNoteIsVisible();
    })

});
