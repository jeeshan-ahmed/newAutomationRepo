// This class contains all the customized methods related to webdriverIo.

class CommonFunctions{

    async setValue(element, value){
        await element.waitForDisplayed(10000);
        await element.setValue(value);
        }
     
        async clickElement(element){
            await element.waitForDisplayed(10000);
            await element.click();
        }
}

module.exports=new CommonFunctions();