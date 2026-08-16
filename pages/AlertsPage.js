const { BasePage } = require('./BasePage');

class AlertsPage extends BasePage {
  constructor(page) {
    super(page);

    this.confirmButton = page.locator('#confirmButton');
    this.promptButton = page.locator('#promtButton');
    this.confirmResult = page.locator('#confirmResult');
    this.promptResult = page.locator('#promptResult');
  }

  async open() {
    await super.open('/alerts');
  }

  async acceptConfirmAlert() {
    this.page.once('dialog', (dialog) => dialog.accept());
    await this.confirmButton.click();
  }

  async fillPromptAlert(text) {
    this.page.once('dialog', (dialog) => dialog.accept(text));
    await this.promptButton.click();
  }
}

module.exports = { AlertsPage };
