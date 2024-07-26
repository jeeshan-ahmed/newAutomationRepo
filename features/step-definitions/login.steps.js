const {Given, When, Then} = require('@wdio/cucumber-framework');
const HomePage=require('../pageobjects/home.page');
const LoginPage=require('../pageobjects/login.page');
const commonFunctions = require('../utils/commonFunctions');
const expect=require('chai').expect;
const assert=require('chai').assert;

Given('user is on the Home page', async() => {
    await HomePage.titleProducts.waitForDisplayed(10000);
    assert.equal(await HomePage.titleProducts.getText(),'Products');
})

When('user navigates to Login page', async() => {
    await HomePage.moveToLoginPage();
    assert.equal(await LoginPage.titleLogin.getText(),'Login');
    assert.equal(await LoginPage.labelUsername.getText(),'Username');
    assert.equal(await LoginPage.labelPassword.getText(),'Password');
    assert.equal(await LoginPage.btnLogin.isExisting(),true);
})

Then(/^user login with (.*) and (.*)$/, async(username,password) => {
    await LoginPage.performLogin(username,password);
})

Then(/^user will get a (.*)$/, async(message) => {
    if(message === 'Products'){ 
        await HomePage.titleProducts.waitForDisplayed(10000);
        assert.equal(await HomePage.titleProducts.isExisting(),true);
        await driver.pause(4000);
    }else{ 
        assert.equal(await LoginPage.errorMessage(message).isExisting(),true);
        await driver.back();
    }
})
