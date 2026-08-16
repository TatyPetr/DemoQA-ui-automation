const { BasePage } = require('./BasePage');

class BookStorePage extends BasePage {
  constructor(page) {
    super(page);

    this.searchInput = page.locator('#searchBox');
    this.bookRows = page.locator('.rt-tr-group');
  }

  async open() {
    await super.open('/books');

    await this.searchInput.waitFor({ state: 'visible' });
  }

  async searchBook(searchValue) {
    await this.searchInput.fill(searchValue);
  }

  getBookLink(title) {
    return this.page.getByRole('link', {
      name: title,
      exact: true
    });
  }

  getBookRow(title) {
    return this.bookRows.filter({
      has: this.getBookLink(title)
    });
  }

  async waitForBookToAppear(title) {
    await this.getBookLink(title).waitFor({ state: 'visible' });
  }

  async openBook(title) {
    await this.getBookLink(title).click();
  }
}

module.exports = { BookStorePage };
