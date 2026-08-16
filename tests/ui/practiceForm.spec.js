const { test, expect } = require('../../fixtures/pages.fixture');
const {
  practiceFormRequiredData,
  practiceFormFullData
} = require('../../test-data/formData');

test.describe('Practice Form', () => {
  test('TC-UI-007: user submits Practice Form with required fields @smoke', async ({
    practiceFormPage
  }) => {
    await practiceFormPage.open();
    await practiceFormPage.fillRequiredFields(practiceFormRequiredData);
    await practiceFormPage.submit();

    await expect(practiceFormPage.modalTitle).toHaveText(
      'Thanks for submitting the form'
    );
    await expect(practiceFormPage.resultTable).toContainText(
      `${practiceFormRequiredData.firstName} ${practiceFormRequiredData.lastName}`
    );
    await expect(practiceFormPage.resultTable).toContainText(
      practiceFormRequiredData.mobile
    );
  });

  test('TC-UI-008: user submits Practice Form with all available data', async ({
    practiceFormPage
  }) => {
    await practiceFormPage.open();
    await practiceFormPage.fillFullForm(practiceFormFullData);
    await practiceFormPage.submit();

    await expect(practiceFormPage.modalTitle).toHaveText(
      'Thanks for submitting the form'
    );
    await expect(practiceFormPage.resultTable).toContainText(practiceFormFullData.email);
    await expect(practiceFormPage.resultTable).toContainText('Maths');
    await expect(practiceFormPage.resultTable).toContainText('English');
    await expect(practiceFormPage.resultTable).toContainText(practiceFormFullData.city);
  });
});
