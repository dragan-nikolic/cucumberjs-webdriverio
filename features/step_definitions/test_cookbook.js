const assert = require('assert')
const {Given, When, Then} = require('cucumber')

Given('I visit Test Cookbook website', async function () {
  await this.page.open('');
});

Then('I see title Test Cookbook', async function () {
  const title = await this.page.getTitle()
  assert.equal(title, "Test Cookbook")
})  
