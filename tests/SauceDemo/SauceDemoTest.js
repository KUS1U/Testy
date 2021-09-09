import SauceDemoTest from '../../pageObjects/SauceDemo/pom_sauce_demo'

describe('Sauce Demo web page test', function(){
    const sauceDemo = new SauceDemoTest();
    const username = 'standard_user';
    const password = 'secret_sauce';
    const submit = 'login-button'
    const backpack = 'sauce-labs-backpack';
    const cart_icon = 'shopping_cart_link';
    const cart_badge = 'shopping_cart_badge';
    const item_name = 'inventory_item_name';
    const price = '29.99';
    const firstName = 'firstName';
    const lastName = 'lastName';
    const postal = 'postalCode';

    beforeEach(() => {
     sauceDemo.openPage();
    })

    it('Submit empty login form', function(){
        sauceDemo.emptyLoginForm();
        sauceDemo.credentialsRequirementError();

    })

    it('Login with valid credentials', function(){
        sauceDemo.loginFormWithSubmit(username, password, submit);
        sauceDemo.sessionData(username);

    })

    it('Success order at SecretSauce web page', function(){
        sauceDemo.loginFormWithSubmit(username, password, submit);
        sauceDemo.sessionData(username);
        sauceDemo.addToCart(backpack);
        sauceDemo.isButtonChanged(backpack);
        sauceDemo.shoppingCart(cart_icon, cart_badge);
        sauceDemo.isProductAdded(item_name);
        sauceDemo.checkPrice(price)
        sauceDemo.checkoutClick();
        sauceDemo.checkoutUrlCheck()
        sauceDemo.isFillFormVisible();
        sauceDemo.fillInFormWithData(firstName, lastName, postal);
        sauceDemo.continueButtonClick();
        sauceDemo.continueUrlCheck();
        sauceDemo.clickFinish();
        sauceDemo.finishUrlCheck();
        sauceDemo.ifThankYouNoteIsVisible();

    })

});
