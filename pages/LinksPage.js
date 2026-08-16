const { BasePage } = require('./BasePage');

class LinksPage extends BasePage {
  constructor(page) {
    super(page);

    this.homeLink = page.locator('#simpleLink');
  }

  async open() {
    await super.open('/links');
  }

  async openHomeInNewTab() {
    const newPagePromise = this.page.context().waitForEvent('page');
    await this.homeLink.click();

    return newPagePromise;
  }
}

module.exports = { LinksPage };
