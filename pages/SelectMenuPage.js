const { BasePage } = require('./BasePage');
 
class SelectMenuPage extends BasePage {
  constructor(page) {
    super(page);
    this.oldStyleSelect = page.locator('#oldSelectMenu');
    this.selectOne = page.locator('#selectOne');
    this.multiSelect = page.locator('#cars');
    this.groupedSelect = page.locator('#withOptGroup');
  }
 
  async openSelectMenuPage() {
    await this.page.goto('https://demoqa.com/select-menu', {
      waitUntil: 'domcontentloaded'
    });
  }
 
  async selectOldStyleOption(option) {
    await this.oldStyleSelect.selectOption({ label: option });
  }
 
  async getOldStyleSelectedOptionText() {
    return this.oldStyleSelect.locator('option:checked').innerText();
  }
 
  async selectOneOption(option) {
    await this.selectOne.click();
    await this.page.getByText(option, {
      exact: true
    }).last().click();
  }

  async selectGroupedOption(option) {
    await this.groupedSelect.click();
    await this.page.getByText(option, {
      exact: true
    }).last().click();
  }
 
  async selectMultipleCars(options) {
    await this.multiSelect.selectOption(
      options.map((option) => ({ label: option }))
    );
  }
 
  async getSelectedCars() {
    return this.multiSelect.locator('option:checked').allTextContents();
  }
}
 
module.exports = { SelectMenuPage };
 