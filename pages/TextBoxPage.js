const { BasePage } = require('./BasePage');
 
class TextBoxPage extends BasePage {
  constructor(page) {
    super(page);
    this.fullNameInput = page.locator('#userName');
    this.emailInput = page.locator('#userEmail');
    this.currentAddressInput = page.locator('#currentAddress');
    this.permanentAddressInput = page.locator('#permanentAddress');
    this.submitButton = page.locator('#submit');
    this.output = page.locator('#output');
  }
  async openTextBoxPage() {
    await this.open('/text-box');
  }
 
  async fillTextBoxForm(userData) {
    await this.fullNameInput.fill(userData.fullName);
    await this.emailInput.fill(userData.email);
    await this.currentAddressInput.fill(userData.currentAddress);
    await this.permanentAddressInput.fill(userData.permanentAddress);
  }
  //Отправляет форму
  async submitForm() {
    await this.scrollToElement(this.submitButton);
    await this.submitButton.click();
  }
 
  async getSubmittedData() {
    return this.output.innerText();
  }

  async isEmailFieldInvalid() {
    const classAttribute = await this.emailInput.getAttribute('class');
    return classAttribute.includes('field-error');
  }
} 
module.exports = { TextBoxPage };