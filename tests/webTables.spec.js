const { test, expect } = require('../fixtures/pages.fixture');
const { webTableData } = require('../test-data/testData');
const { generateRandomEmail, generateRandomName } = require('../helpers/dataGenerator');

test.describe('Elements - Web Tables', () => {
  test.beforeEach(async ({ webTablesPage }) => {
    await webTablesPage.openWebTablesPage();
    await expect(webTablesPage.addButton).toBeVisible();
  });

  test('TC-003: should add a new record to Web Tables', async ({ webTablesPage }) => {
    const user = {
      ...webTableData,
      firstName: generateRandomName('Alex'),
      email: generateRandomEmail('webtable')
    };

    await webTablesPage.addUser(user);
    const createdEmailCell = webTablesPage.getCellByText(user.email);
    await expect(createdEmailCell).toBeVisible();
    await expect(createdEmailCell).toHaveText(user.email);
  });

  test('TC-004: should search record by existing first name', async ({
    webTablesPage
  }) => {
    await webTablesPage.searchUser(webTableData.searchText);
    const foundNameCell = webTablesPage.getCellByText(webTableData.searchText);
    await expect(foundNameCell).toBeVisible();
    await expect(foundNameCell).toHaveText(webTableData.searchText);
  });

  test('TC-005: should edit an existing record in Web Tables', async ({
    webTablesPage
  }) => {
    const user = {
      ...webTableData,
      firstName: generateRandomName('EditUser'),
      email: generateRandomEmail('edit')
    };
    const updatedDepartment = 'Automation QA';

    await webTablesPage.addUser(user);
    await webTablesPage.editUserByEmail(user.email);
    await webTablesPage.departmentInput.fill(updatedDepartment);
    await webTablesPage.saveUser();

    await expect(webTablesPage.getCellByText(user.email)).toBeVisible();

    await expect(webTablesPage.getCellByText(updatedDepartment)).toBeVisible();
  });

  test('TC-006: should delete a created record from Web Tables', async ({
    webTablesPage
  }) => {
    const user = {
      ...webTableData,
      firstName: generateRandomName('DeleteUser'),
      email: generateRandomEmail('delete')
    };
    await webTablesPage.addUser(user);

    await expect(webTablesPage.getCellByText(user.email)).toBeVisible();
    await webTablesPage.deleteUserByEmail(user.email);

    await expect(webTablesPage.getCellByText(user.email)).toHaveCount(0);
  });
});
