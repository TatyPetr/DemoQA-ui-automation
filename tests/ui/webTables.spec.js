const { test, expect } = require('../../fixtures/pages.fixture');
const { generateRandomUser } = require('../../helpers/dataGenerator');

test.describe('Web Tables', () => {
  test('TC-UI-003: user can add a new table record @smoke', async ({ webTablesPage }) => {
    const user = generateRandomUser();

    await webTablesPage.open();
    await webTablesPage.addUser(user);

    await expect(webTablesPage.getCellByText(user.email)).toBeVisible();
    await expect(webTablesPage.getCellByText(user.firstName)).toBeVisible();
  });

  test('TC-UI-004: user can find a created record by email', async ({
    webTablesPage
  }) => {
    const user = generateRandomUser();

    await webTablesPage.open();
    await webTablesPage.addUser(user);
    await webTablesPage.searchUser(user.email);

    await expect(webTablesPage.getCellByText(user.email)).toBeVisible();
    await expect(webTablesPage.getCellByText(user.firstName)).toBeVisible();
  });

  test('TC-UI-005: user can edit an existing record', async ({ webTablesPage }) => {
    const user = generateRandomUser();
    const updatedDepartment = 'Automation';

    await webTablesPage.open();
    await webTablesPage.addUser(user);
    await webTablesPage.editUserByEmail(user.email);

    await webTablesPage.departmentInput.fill(updatedDepartment);
    await webTablesPage.saveUser();

    await expect(webTablesPage.getCellByText(updatedDepartment)).toBeVisible();
  });

  test('TC-UI-006: user can delete an existing record', async ({ webTablesPage }) => {
    const user = generateRandomUser();

    await webTablesPage.open();
    await webTablesPage.addUser(user);

    await expect(webTablesPage.getCellByText(user.email)).toBeVisible();

    await webTablesPage.deleteUserByEmail(user.email);

    await expect(webTablesPage.getCellByText(user.email)).not.toBeVisible();
  });
});
