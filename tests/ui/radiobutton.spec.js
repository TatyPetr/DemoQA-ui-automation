const { test, expect } = require('../../fixtures/pages.fixture');

test.describe('Radio Button', () => {
  test('TC-UI-013: user can select Yes radio button', async ({ radioButtonPage }) => {
    await radioButtonPage.open();
    await radioButtonPage.selectAnswer('Yes');

    await expect(radioButtonPage.resultText).toHaveText('Yes');
  });

  test('TC-UI-014: user can select Impressive radio button', async ({
    radioButtonPage
  }) => {
    await radioButtonPage.open();
    await radioButtonPage.selectAnswer('Impressive');

    await expect(radioButtonPage.resultText).toHaveText('Impressive');
  });
});
