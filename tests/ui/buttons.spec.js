const { test, expect } = require('../../fixtures/pages.fixture');
const messages = require('../../test-data/expectedMessages');

test.describe('Buttons', () => {
  test('TC-UI-015: user receives message after double click', async ({ buttonsPage }) => {
    await buttonsPage.open();
    await buttonsPage.performDoubleClick();

    await expect(buttonsPage.doubleClickMessage).toHaveText(messages.doubleClick);
  });

  test('TC-UI-016: user receives message after right click', async ({ buttonsPage }) => {
    await buttonsPage.open();
    await buttonsPage.performRightClick();

    await expect(buttonsPage.rightClickMessage).toHaveText(messages.rightClick);
  });

  test('TC-UI-017: user receives message after dynamic click', async ({
    buttonsPage
  }) => {
    await buttonsPage.open();
    await buttonsPage.performDynamicClick();

    await expect(buttonsPage.dynamicClickMessage).toHaveText(messages.dynamicClick);
  });
});
