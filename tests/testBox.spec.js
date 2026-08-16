const { test, expect } = require('../fixtures/pages.fixture');
const { textBoxData } = require('../test-data/testData');

test.describe('Elements - Text Box', () => {
  test.beforeEach(async ({ textBoxPage }) => {
    await textBoxPage.openTextBoxPage();
  });

  test('TC-001: should submit Text Box form with valid data', async ({ textBoxPage }) => {
    await textBoxPage.fillTextBoxForm(textBoxData.validUser);
    await textBoxPage.submitForm();
    const submittedData = await textBoxPage.getSubmittedData();
    await expect(textBoxPage.output).toBeVisible();
    expect(submittedData).toContain(textBoxData.validUser.fullName);
    expect(submittedData).toContain(textBoxData.validUser.email);
    expect(submittedData).toContain(textBoxData.validUser.currentAddress);
  });

  test('TC-002: should show validation error for invalid email', async ({
    textBoxPage
  }) => {
    await textBoxPage.fillTextBoxForm({
      ...textBoxData.validUser,
      email: textBoxData.invalidEmail
    });
    await textBoxPage.submitForm();
    expect(await textBoxPage.isEmailFieldInvalid()).toBeTruthy();
    await expect(textBoxPage.output).not.toBeVisible();
  });
});
