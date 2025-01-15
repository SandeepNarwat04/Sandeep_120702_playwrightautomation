const { test, expect } = require('@playwright/test');
const LoginPage=require("../pages/loginpage")
const DashboardPage=require("../pages/dashboard")


test('Verify logout functionality.', async ({ page }) => {

    const dashboardPage=new DashboardPage(page)
    const loginPage=new LoginPage(page)

    //After a successful login, click the logout button and Verify that the user is redirected to the login page.


    await loginPage.gotoLoginPage()
    await loginPage.loginToApplication('Admin' ,'admin123')
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL(/dashboard/)
    await dashboardPage.logoutToApplication()
    await expect(page).toHaveURL(/login/)
    await expect(page).toHaveTitle('OrangeHRM')
  
  });

  test('Validate the options in the side drawr', async ({ page }) => {

    const dashboardPage=new DashboardPage(page)
    const loginPage=new LoginPage(page)

    await loginPage.gotoLoginPage()
    await loginPage.loginToApplication('Admin' ,'admin123')
    //Verify all the options are visible scroll and get the options and add assertions
    await dashboardPage.countDashboardMenuListItems()
    await dashboardPage.displayDashboardMenuListItems()
  
  });

