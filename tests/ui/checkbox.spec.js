const { test, expect } = require('../../fixtures/pages.fixture');

test.describe('Check Box', () => {
  test('TC-UI-011: user can select Downloads checkbox @smoke', async ({
    checkBoxPage
  }) => {
    await checkBoxPage.open();

    await checkBoxPage.expandItem('Home');

    await checkBoxPage.expandItem('Documents');

    await checkBoxPage.selectItem('Downloads');

    await expect(checkBoxPage.result).toContainText('downloads');
  });

  test('TC-UI-012: user can select and unselect a nested checkbox', async ({
    checkBoxPage
  }) => {
    await checkBoxPage.open();

    await checkBoxPage.expandItem('Home');

    await checkBoxPage.expandItem('Downloads');

    await checkBoxPage.selectItem('Word File.doc');

    await expect(checkBoxPage.result).toContainText('wordFile');

    await checkBoxPage.unselectItem('Word File.doc');

    await expect(checkBoxPage.result).toBeHidden();
  });
});
