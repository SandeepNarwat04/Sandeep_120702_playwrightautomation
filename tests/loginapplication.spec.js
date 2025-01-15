const { test, expect } = require('@playwright/test');
const LoginPage=require("../pages/loginpage")

test('Verify that the login page loads successfully.', async ({ page }) => {

  const loginPage=new LoginPage(page)

  await loginPage.gotoLoginPage()
  //To validate page titles
  await expect(page).toHaveTitle('OrangeHRM');

  //To Check if the username and password fields, as well as the login button, are visible.
  loginPage.verifySignInPage();
  await page.waitForTimeout(3000)

});



test('Perform a valid login', async ({ page }) => {

  const loginPage=new LoginPage(page)

  //Verify login and user is redirected to the dashboard.


  await loginPage.gotoLoginPage()
  await loginPage.loginToApplication('Admin' ,'admin123')
  await page.waitForTimeout(3000)
  await expect(page).toHaveURL(/dashboard/)

});


test('Handle invalid login.', async ({ page }) => {

  const loginPage=new LoginPage(page)

  await loginPage.gotoLoginPage()
  await loginPage.loginToApplication('test@email.com' ,'admin@123')

  //Verify that an appropriate error message is displayed.
  await loginPage.verifyErrorMessage()
  await page.waitForTimeout(3000)

});



