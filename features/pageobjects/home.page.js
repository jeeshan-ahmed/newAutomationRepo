const commonFunctions=require('../utils/commonFunctions');

class HomePage{

    get titleProducts () {
        return $("//*[@text='Products']");
    }
    get sideMenu () {
        return $('~open menu'); 
    }
    get optionLogIn() {
        return $("//*[@text='Log In']"); 
    }

    async moveToLoginPage(){
         await commonFunctions.clickElement(this.sideMenu);
         await commonFunctions.clickElement(this.optionLogIn);
    }

}
module.exports=new HomePage();