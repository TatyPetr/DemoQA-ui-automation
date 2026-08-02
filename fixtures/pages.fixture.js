const base = require('@playwright/test');
const {TextBoxPage} = require('../pages/TextBoxPage');
const {WebTablesPage} = require('../pages/WebTablesPage');
const {PracticeFormPage} = require('../pages/PracticeFormPage');
const {SelectMenuPage} = require('../pages/SelectMenuPage');
 
exports.test = base.test.extend({
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
  }
});
exports.expect = base.expect;