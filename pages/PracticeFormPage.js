const { BasePage } = require('./BasePage');

class PracticeFormPage extends BasePage {
  constructor(page) {
    super(page);

    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.emailInput = page.locator('#userEmail');
    this.mobileInput = page.locator('#userNumber');
    this.currentAddressInput = page.locator('#currentAddress');
    this.submitButton = page.locator('#submit');
    this.modalTitle = page.locator('#example-modal-sizes-title-lg');
    this.resultTable = page.locator('.table-responsive');
  }

  async open() {
    await super.open('/automation-practice-form');
  }

  async selectGender(gender) {
    await this.page.getByText(gender, { exact: true }).click();
  }

  async selectDateOfBirth(dateOfBirth) {
    await this.page.locator('#dateOfBirthInput').click();

    await this.page
      .locator('.react-datepicker__year-select')
      .selectOption(dateOfBirth.year);

    await this.page
      .locator('.react-datepicker__month-select')
      .selectOption({ label: dateOfBirth.month });

    const daySelector =
      `.react-datepicker__day--0${dateOfBirth.day}` +
      ':not(.react-datepicker__day--outside-month)';

    await this.page.locator(daySelector).click();
  }

  async selectSubjects(subjects) {
    for (const subject of subjects) {
      await this.page.locator('#subjectsInput').fill(subject);
      await this.page.getByText(subject, { exact: true }).click();
    }
  }

  async selectHobbies(hobbies) {
    for (const hobby of hobbies) {
      await this.page.getByText(hobby, { exact: true }).click();
    }
  }

  async selectStateAndCity(state, city) {
    await this.page.locator('#state').click();
    await this.page.getByText(state, { exact: true }).click();

    await this.page.locator('#city').click();
    await this.page.getByText(city, { exact: true }).click();
  }

  async fillRequiredFields(data) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.selectGender(data.gender);
    await this.mobileInput.fill(data.mobile);
  }

  async fillFullForm(data) {
    await this.fillRequiredFields(data);
    await this.emailInput.fill(data.email);
    await this.selectDateOfBirth(data.dateOfBirth);
    await this.selectSubjects(data.subjects);
    await this.selectHobbies(data.hobbies);
    await this.currentAddressInput.fill(data.currentAddress);
    await this.selectStateAndCity(data.state, data.city);
  }

  async submit() {
    await this.submitButton.scrollIntoViewIfNeeded();
    await this.submitButton.click();
  }
}

module.exports = { PracticeFormPage };
