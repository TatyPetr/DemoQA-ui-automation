const { test, expect } = require('../fixtures/pages.fixture');
const { selectMenuData } = require('../test-data/testData');

test.describe('Widgets - Select Menu', () => {
  test.beforeEach(async ({ selectMenuPage }) => {
    await selectMenuPage.openSelectMenuPage();
  });
  test('TC-009: should select option in Old Style Select Menu', async ({
    selectMenuPage
  }) => {
    await selectMenuPage.selectOldStyleOption(selectMenuData.oldStyleOption);
    const selectedOption = await selectMenuPage.getOldStyleSelectedOptionText();
    expect(selectedOption).toBe(selectMenuData.oldStyleOption);
  });
  test('TC-010: should select multiple cars in Standard Multi Select', async ({
    selectMenuPage
  }) => {
    await selectMenuPage.selectMultipleCars(selectMenuData.multiSelectOptions);
    const selectedCars = await selectMenuPage.getSelectedCars();
    expect(selectedCars).toEqual(
      expect.arrayContaining(selectMenuData.multiSelectOptions)
    );
  });
});
