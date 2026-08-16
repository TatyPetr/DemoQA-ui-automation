const { test, expect } = require('../../fixtures/pages.fixture');

test.describe('Select Menu', () => {
  test('TC-UI-009: user can select Purple in Old Style Select Menu', async ({
    selectMenuPage
  }) => {
    await selectMenuPage.open();
    await selectMenuPage.selectOldStyleColor('Purple');

    await expect(selectMenuPage.oldStyleSelect).toHaveValue('4');
  });

  test('TC-UI-010: user can select Volvo and Saab in Standard Multi Select', async ({
    selectMenuPage
  }) => {
    await selectMenuPage.open();
    await selectMenuPage.selectMultipleCars(['volvo', 'saab']);

    await expect(selectMenuPage.multiSelect).toHaveValues(['volvo', 'saab']);
    await expect(selectMenuPage.getSelectedCars()).resolves.toEqual(['Volvo', 'Saab']);
  });
});
