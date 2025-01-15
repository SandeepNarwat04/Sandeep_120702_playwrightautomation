const {expect} = require('@playwright/test');

class LoginPage
{

    constructor(page)
    {

        this.page=page
        this.username="input[placeholder='username']"
        this.password="input[placeholder='password']"
        this.loginbutton="button[type='submit']"
        this.errormessage=".oxd-text.oxd-text--p.oxd-alert-content-text"

    }


    async gotoLoginPage()
    {

        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }


    async verifySignInPage()
    {
        
        await expect(this.page.locator(this.username)).toBeVisible();
        await expect(this.page.locator(this.password)).toBeVisible();
        await expect(this.page.locator(this.loginbutton)).toBeVisible();

    }

    async loginToApplication(Email , Password)
    {
        await this.page.fill(this.username,Email)
        await this.page.fill(this.password,Password)
        await this.page.click(this.loginbutton)
        
    }

    async verifyErrorMessage()
    {
        await expect(this.page.locator(this.errormessage)).toBeVisible()
    }


}

module.exports=LoginPage;