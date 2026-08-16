const { BasePage } = require('./BasePage');

class WebTablesPage extends BasePage {
  constructor(page) {
    super(page);

    this.addButton = page.locator('#addNewRecordButton');
    this.searchInput = page.locator('#searchBox');

    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.emailInput = page.locator('#userEmail');
    this.ageInput = page.locator('#age');
    this.salaryInput = page.locator('#salary');
    this.departmentInput = page.locator('#department');

    this.submitButton = page.locator('#submit');
    this.registrationModal = page.locator('#registration-form-modal');
  }

  async open() {
    await super.open('/webtables');
  }

  async openAddRecordForm() {
    await this.addButton.scrollIntoViewIfNeeded();
    await this.addButton.click();
    await this.registrationModal.waitFor({ state: 'visible' });
  }

  async fillUserForm(userData) {
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.emailInput.fill(userData.email);
    await this.ageInput.fill(userData.age);
    await this.salaryInput.fill(userData.salary);
    await this.departmentInput.fill(userData.department);
  }

  async saveUser() {
    await this.submitButton.scrollIntoViewIfNeeded();
    await this.submitButton.click();
    await this.registrationModal.waitFor({ state: 'hidden' });
  }

  async addUser(userData) {
    await this.openAddRecordForm();
    await this.fillUserForm(userData);
    await this.saveUser();
  }

  async searchUser(searchValue) {
    await this.searchInput.fill(searchValue);
  }

  getCellByText(text) {
    return this.page.getByText(text, { exact: true });
  }

  getRecordContainerByEmail(email) {
    const emailCell = this.getCellByText(email);

    return emailCell.locator(
      'xpath=ancestor::*[.//*[@title="Edit"] and .//*[@title="Delete"]][1]'
    );
  }

  async editUserByEmail(email) {
    const recordContainer = this.getRecordContainerByEmail(email);
    const editButton = recordContainer.locator('[title="Edit"]');

    await editButton.evaluate((element) => element.click());
    await this.registrationModal.waitFor({ state: 'visible' });
  }

  async deleteUserByEmail(email) {
    const recordContainer = this.getRecordContainerByEmail(email);
    const deleteButton = recordContainer.locator('[title="Delete"]');

    await deleteButton.evaluate((element) => element.click());
  }
}

module.exports = { WebTablesPage };
