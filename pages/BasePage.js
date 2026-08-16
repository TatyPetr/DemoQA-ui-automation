class BasePage {
  constructor(page) {
    this.page = page;
  }

  async open(path) {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }
}

module.exports = { BasePage };
