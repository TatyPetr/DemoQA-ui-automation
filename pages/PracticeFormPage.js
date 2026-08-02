const { BasePage } = require('./BasePage');
 
class PracticeFormPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.emailInput = page.locator('#userEmail');
    this.mobileInput = page.locator('#userNumber');
    this.subjectInput = page.locator('#subjectsInput');
    this.addressInput = page.locator('#currentAddress');
    this.submitButton = page.locator('#submit');
    this.successModal = page.locator('.modal-content');
    this.modalTitle = page.locator('#example-modal-sizes-title-lg');
  }
 
  async openPracticeFormPage() {
    await this.open('/automation-practice-form');
  }
 
  async selectGender(gender) {
    const genderId = {
      Male: 'gender-radio-1',
      Female: 'gender-radio-2',
      Other: 'gender-radio-3'
    };
    await this.page.locator(`label[for="${genderId[gender]}"]`).click();
  }
 
  async selectHobby(hobby) {
    await this.page.getByText(hobby, { exact: true }).click();
  }
 
  async selectSubject(subject) {
    await this.subjectInput.fill(subject);
    await this.subjectInput.press('Enter');
  }
 
  async selectState(state) {
    await this.page.locator('#state').click();
    await this.page.getByText(state, { exact: true }).last().click();
  }
 
  async selectCity(city) {
    await this.page.locator('#city').click();
    await this.page.getByText(city, { exact: true }).last().click();
  }
 
  async fillRequiredFields(formData) {
    await this.firstNameInput.fill(formData.firstName);
    await this.lastNameInput.fill(formData.lastName);
    await this.selectGender(formData.gender);
    await this.mobileInput.fill(formData.mobile);
  }

  async fillFullForm(formData) {
    await this.fillRequiredFields(formData);
    await this.emailInput.fill(formData.email);
    await this.selectSubject(formData.subject);
    await this.selectHobby(formData.hobby);
    await this.addressInput.fill(formData.address);
    await this.selectState(formData.state);
    await this.selectCity(formData.city);
  }

  async submitForm() {
    await this.submitButton.scrollIntoViewIfNeeded();
    await this.submitButton.click();
  }
}
module.exports = {PracticeFormPage};
 

