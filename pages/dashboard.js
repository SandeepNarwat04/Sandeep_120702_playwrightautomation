const { expect } = require("playwright/test")

class DashboardPage
{

    constructor(page)
    {

        this.page=page
        this.profile=".oxd-userdropdown-tab"
        this.logotbutton="//a[normalize-space()='Logout']"
        //this.menulist="//aside[@class='oxd-sidepanel']//li"
        this.menulist="//div[@class='oxd-sidepanel-body']//ul//a//span"
    

    }


    async logoutToApplication()
    {
    
        await this.page.click(this.profile)
        await this.page.click(this.logotbutton)

        
    }

    async countDashboardMenuListItems()
    {
    
        const menulist = await this.page.locator(this.menulist)

        await expect(menulist).toHaveCount(7)

    

    }


    async displayDashboardMenuListItems()
    {
    
        const menulist = await this.page.$$(this.menulist)

        for (const list of menulist)
            {
                    const itemName= await list.textContent();
                    console.log(itemName)
            }


        


    }


}


module.exports=DashboardPage;