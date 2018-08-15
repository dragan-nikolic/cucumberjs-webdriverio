const Page = require('./page')

class HomePage extends Page {
  get menuButton() { return this.browser.element('button*=Menu') }
  get sideMenu() { return this.browser.element('#sidemenu') }

  async open() {
    await super.open('')
  }
}

module.exports = HomePage
