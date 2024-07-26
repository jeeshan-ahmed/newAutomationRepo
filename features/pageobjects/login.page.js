//import { $ } from '@wdio/globals'
const commonFunctions=require('../utils/commonFunctions');

// This class contains all the locators and methods related to Login page of Demo App.

class LoginPage{

    get titleLogin () {
        return $("(//*[@text='Login'])[1]");
    }
    get labelUsername () {
        return $("//*[@text='Username']");
    }
    get labelPassword () {
        return $("(//*[@text='Password'])[1]");
    }
    get btnLogin () {
        return $('~Login button');
    }
    get inputUsername () {
        return $('~Username input field');
    }
    get inputPassword () {
        return $('~Password input field');
    }
    get errorLockedOut () {
        return $("//*[@text='Sorry, this user has been locked out.']");
    }
    get errorNoMatch () {
        return $("//*[@text='Provided credentials do not match any user in this service.']");
    }
    get errorNoPassword () {
        return $("//*[@text='Password is required']");
    }
    get errorNoUserName () {
        return $("//*[@text='Username is required']");
    }
    get titleProducts () {
        return $("//*[@text='Products']");
    }
    errorMessage (text) {
        return $(`//*[@text='${text}']`);
    }

    async performLogin (username, password) {
        await commonFunctions.setValue(this.inputUsername,username);
        await commonFunctions.setValue(this.inputPassword,password);
        await commonFunctions.clickElement(this.btnLogin);
    }
}

module.exports=new LoginPage();
