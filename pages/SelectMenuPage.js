const { BasePage } = require('./BasePage');

class SelectMenuPage extends BasePage {
  constructor(page) {
    super(page);
    this.oldStyleSelect = page.locator('#oldSelectMenu');
    this.multiSelect = page.locator('#cars');
  }

  async open() {
    await super.open('/select-menu');
  }

  async selectOldStyleColor(color) {
    await this.oldStyleSelect.selectOption({ label: color });
  }

  async selectMultipleCars(cars) {
    await this.multiSelect.selectOption(cars);
  }

  async getSelectedCars() {
    return this.multiSelect.locator('option:checked').allTextContents();
  }
}

module.exports = { SelectMenuPage };
