const { BasePage } = require('./BasePage');

class ButtonsPage extends BasePage {
  constructor(page) {
    super(page);

    this.doubleClickButton = page.locator('#doubleClickBtn');
    this.rightClickButton = page.locator('#rightClickBtn');
    this.dynamicClickButton = page.getByText('Click Me', { exact: true });

    this.doubleClickMessage = page.locator('#doubleClickMessage');
    this.rightClickMessage = page.locator('#rightClickMessage');
    this.dynamicClickMessage = page.locator('#dynamicClickMessage');
  }

  async open() {
    await super.open('/buttons');
  }

  async performDoubleClick() {
    await this.doubleClickButton.dblclick();
  }

  async performRightClick() {
    await this.rightClickButton.click({ button: 'right' });
  }

  async performDynamicClick() {
    await this.dynamicClickButton.click();
  }
}

module.exports = { ButtonsPage };
