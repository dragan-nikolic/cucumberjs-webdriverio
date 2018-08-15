const {After, Before} = require('cucumber')
const HomePage = require('../pages/home_page')

Before(async function (scenario) {
  console.log(`Before: scenario ${scenario.pickle.name}`)
  console.log(this.parameters)
  await this.webdriver.init()
  this.homePage = new HomePage(this.webdriver, 'https://www.testcookbook.com')
});

After(async function (scenario) {
  console.log(`After: scenario ${scenario.pickle.name} ${scenario.result.status}`)
  this.webdriver.end()
});
