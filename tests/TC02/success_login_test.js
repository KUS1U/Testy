import Login from '../../pageObjects/TC02/pom_success_login'

describe('Login', function(){
    const login = new Login()

//    beforeEach(() => {
//      cy.restoreSessionStorageCache();
//    });
//    before(function() {
//      cy.clearSessionStorageCache();
//    });
//    afterEach(() => {
//      cy.saveSessionStorageCache();
//    });

    it('Open page', function(){
        cy.visit('https://www.saucedemo.com/')
    })
    it('Login', function(){
        login.LoginField().should('not.be.null')
        login.PassField().should('not.be.null')
        login.submit().click()
    })
    it('If url changed', function(){
        login.urlCheck()
    })
    it('Session storage change', function(){
         login.sessionData()
     })
});
