const { BasePage } = require('./BasePage');

class BookDetailsPage extends BasePage {
  constructor(page) {
    super(page);

    this.title = page.locator('#title-wrapper #userName-value');
    this.author = page.locator('#author-wrapper #userName-value');
    this.publisher = page.locator('#publisher-wrapper #userName-value');
    this.isbn = page.locator('#ISBN-wrapper #userName-value');
  }
}

module.exports = { BookDetailsPage };
