const { BasePage } = require('./BasePage');

class RadioButtonPage extends BasePage {
  constructor(page) {
    super(page);

    this.resultText = page.locator('.text-success');
  }

  async open() {
    await super.open('/radio-button');
  }

  async selectAnswer(answer) {
    await this.page.getByText(answer, { exact: true }).click();
  }
}
module.exports = { RadioButtonPage };
