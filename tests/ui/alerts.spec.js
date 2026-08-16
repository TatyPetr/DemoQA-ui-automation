const { test, expect } = require('../../fixtures/pages.fixture');
const messages = require('../../test-data/expectedMessages');

test.describe('Alerts', () => {
  test('TC-UI-021: user can accept a confirmation alert', async ({ alertsPage }) => {
    await alertsPage.open();
    await alertsPage.acceptConfirmAlert();

    await expect(alertsPage.confirmResult).toHaveText(messages.alertResult);
  });

  test('TC-UI-022: user can enter text into a prompt alert', async ({ alertsPage }) => {
    const enteredText = 'Playwright user';

    await alertsPage.open();
    await alertsPage.fillPromptAlert(enteredText);

    await expect(alertsPage.promptResult).toHaveText(
      `${messages.promptPrefix}${enteredText}`
    );
  });
});
