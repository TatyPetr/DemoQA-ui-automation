const { test, expect } = require('../fixtures/pages.fixture');
const { practiceFormData } = require('../test-data/testData');
 
test.describe('Forms - Practice Form', () => {
  test.beforeEach(async ({ practiceFormPage }) => {
    await practiceFormPage.openPracticeFormPage();
  });
 
  test('TC-007: should submit Practice Form with required fields only', async ({ practiceFormPage }) => {
    await practiceFormPage.fillRequiredFields(practiceFormData);
    await practiceFormPage.submitForm();
    await expect(practiceFormPage.successModal).toBeVisible();
    await expect(practiceFormPage.modalTitle).toHaveText('Thanks for submitting the form');
    await expect(practiceFormPage.successModal).toContainText(practiceFormData.firstName);
    await expect(practiceFormPage.successModal).toContainText(practiceFormData.lastName);
  });
 
  test('TC-008: should submit Practice Form with additional optional fields', async ({ practiceFormPage }) => {
    await practiceFormPage.fillFullForm(practiceFormData);
    await practiceFormPage.submitForm();
    await expect(practiceFormPage.successModal).toBeVisible();
    await expect(practiceFormPage.successModal).toContainText(practiceFormData.email);
    await expect(practiceFormPage.successModal).toContainText(practiceFormData.subject);
    await expect(practiceFormPage.successModal).toContainText(practiceFormData.address);
    await expect(practiceFormPage.successModal).toContainText(practiceFormData.state);
    await expect(practiceFormPage.successModal).toContainText(practiceFormData.city);
  });
});
 