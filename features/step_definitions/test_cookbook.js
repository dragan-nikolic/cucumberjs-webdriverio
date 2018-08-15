const assert = require('assert')
const {Given, When, Then} = require('cucumber')

Given('I visit Test Cookbook website', async function () {
  await this.homePage.open('');
});

Then('I see title Test Cookbook', async function () {
  const title = await this.homePage.getTitle()
  assert.equal(title, "Test Cookbook")
})  

When('I click Menu button', async function () {
  await this.homePage.menuButton.click()
});

Then('The Menu disappears', async function () {
  await this.homePage.sideMenu.waitForExist(5000, true)
});
