const base = require('@playwright/test');

const { TextBoxPage } = require('../pages/TextBoxPage');
const { WebTablesPage } = require('../pages/WebTablesPage');
const { PracticeFormPage } = require('../pages/PracticeFormPage');
const { SelectMenuPage } = require('../pages/SelectMenuPage');
const { CheckBoxPage } = require('../pages/CheckBoxPage');
const { RadioButtonPage } = require('../pages/RadioButtonPage');
const { ButtonsPage } = require('../pages/ButtonsPage');
const { UploadDownloadPage } = require('../pages/UploadDownloadPage');
const { LinksPage } = require('../pages/LinksPage');
const { AlertsPage } = require('../pages/AlertsPage');
const { BookStorePage } = require('../pages/BookStorePage');
const { BookDetailsPage } = require('../pages/BookDetailsPage');

const { BookStoreApiClient } = require('../api/BookStoreApiClient');
const { AccountApiClient } = require('../api/AccountApiClient');

const test = base.test.extend({
  textBoxPage: async ({ page }, use) => {
    await use(new TextBoxPage(page));
  },

  webTablesPage: async ({ page }, use) => {
    await use(new WebTablesPage(page));
  },

  practiceFormPage: async ({ page }, use) => {
    await use(new PracticeFormPage(page));
  },

  selectMenuPage: async ({ page }, use) => {
    await use(new SelectMenuPage(page));
  },

  checkBoxPage: async ({ page }, use) => {
    await use(new CheckBoxPage(page));
  },

  radioButtonPage: async ({ page }, use) => {
    await use(new RadioButtonPage(page));
  },

  buttonsPage: async ({ page }, use) => {
    await use(new ButtonsPage(page));
  },

  uploadDownloadPage: async ({ page }, use) => {
    await use(new UploadDownloadPage(page));
  },

  linksPage: async ({ page }, use) => {
    await use(new LinksPage(page));
  },

  alertsPage: async ({ page }, use) => {
    await use(new AlertsPage(page));
  },

  bookStorePage: async ({ page }, use) => {
    await use(new BookStorePage(page));
  },

  bookDetailsPage: async ({ page }, use) => {
    await use(new BookDetailsPage(page));
  },

  bookStoreApi: async ({ request }, use) => {
    await use(new BookStoreApiClient(request));
  },

  accountApi: async ({ request }, use) => {
    await use(new AccountApiClient(request));
  }
});

module.exports = {
  test,
  expect: base.expect
};
