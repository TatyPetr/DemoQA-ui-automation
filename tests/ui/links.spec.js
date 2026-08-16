const { test, expect } = require('../../fixtures/pages.fixture');

test.describe('Links', () => {
  test('TC-UI-020: Home link opens DemoQA home page in a new tab', async ({
    linksPage
  }) => {
    await linksPage.open();

    const newPage = await linksPage.openHomeInNewTab();
    await newPage.waitForLoadState('domcontentloaded');

    await expect(newPage).toHaveURL(/demoqa\.com\/?$/);
    await expect(newPage.locator('body')).toContainText('Book Store');
  });
});
