Quick Setup Playwright 

1) Install Nodejs
2) Install VS Code Editor
3) Create project folder and open it in VSCode 
4)or Clone repository:
    * git clone https://github.com/SandeepNarwat04/Sandeep_120702_playwrightautomation.git

4) Install playwright  using terminal
  npm init playwright@latest

  package.json  --- node project management file
  playwright.config.js  -- playwright configuration
  tests --- we can all playwright tests

  npm playwright -v   -- return installed version of playwright.


Run the playwright test
-----------
npx playwright test
npx playwright test --headed

HTML report
-------------
npx playwright show-report


Step 4 - Run the test
npx playwright test --project=chromium --headed  runs on specific browser in headed mode
npx playwright test                 runs all tests on all browsers in headless mode
npx playwright test --project=chromium      runs on specific browser
npx playwright test --headed        runs tests in headed mode
npx playwright test --debug         debug tests
npx playwright test example.spec.js --debug           debug specific test file


Allure report 

1. Install allure-playwright using a package manager
	npm install -D allure-playwright

2. Installing Allure command line 
	npm install -g allure-commandline —save-dev

3. Playwright.config.js reporter: [["html"],["allure-playwright"]], 
4. via the command line:
	npx playwright test --reporter=line,allure-playwright


5. Generate Allure Report after the tests are executed:
	allure generate ./allure-results -o ./allure-report —clean


6. Open the generated report:
	allure open ./allure-report

