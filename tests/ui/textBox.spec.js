const { test, expect } = require('../../fixtures/pages.fixture');
const { validTextBoxData, invalidTextBoxData } = require('../../test-data/formData');

test.describe('Text Box', () => {
  test('TC-UI-001: user submits Text Box with valid data @smoke', async ({
    textBoxPage
  }) => {
    await textBoxPage.open();
    await textBoxPage.fillForm(validTextBoxData);
    await textBoxPage.submit();

    await expect(textBoxPage.outputName).toContainText(validTextBoxData.fullName);
    await expect(textBoxPage.outputEmail).toContainText(validTextBoxData.email);
    await expect(textBoxPage.outputCurrentAddress).toContainText(
      validTextBoxData.currentAddress
    );
    await expect(textBoxPage.outputPermanentAddress).toContainText(
      validTextBoxData.permanentAddress
    );
  });

  test('TC-UI-002: user cannot submit Text Box with invalid email @negative', async ({
    textBoxPage
  }) => {
    await textBoxPage.open();
    await textBoxPage.fillForm(invalidTextBoxData);
    await textBoxPage.submit();

    await expect(textBoxPage.emailInput).toHaveClass(/field-error/);
    await expect(textBoxPage.outputName).not.toBeVisible();
  });
});
