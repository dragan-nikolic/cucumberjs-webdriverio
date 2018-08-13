class Page {
  constructor(browser, baseUrl) {
    this.browser = browser
    this.baseUrl = baseUrl
  }

  async open(extension) {
    await this.browser.init().url(`${this.baseUrl}/${extension}`);
  }

  getTitle() {
    return this.browser.getTitle()
  }
}

module.exports = Page
