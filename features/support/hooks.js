const {After, Before} = require('cucumber')
const Page = require('../pages/page')

Before(async function (scenario) {
  console.log(`Before: scenario ${scenario.pickle.name}`)
  console.log(this.parameters)
  this.page = new Page(this.webdriver, 'https://www.testcookbook.com')
});

After(async function (scenario) {
  console.log(`After: scenario ${scenario.pickle.name} ${scenario.result.status}`)
  this.webdriver.end()
});
