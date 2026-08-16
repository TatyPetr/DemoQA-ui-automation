const { BasePage } = require('./BasePage');

class CheckBoxPage extends BasePage {
  constructor(page) {
    super(page);

    this.result = page.locator('#result');
  }

  async open() {
    await super.open('/checkbox');
  }

  getCheckbox(itemName) {
    return this.page.getByRole('checkbox', {
      name: `Select ${itemName}`
    });
  }

  getTreeNode(itemName) {
    return this.page

      .locator('.rc-tree-treenode')

      .filter({ has: this.getCheckbox(itemName) });
  }

  async selectItem(itemName) {
    const checkbox = this.getCheckbox(itemName);

    await checkbox.scrollIntoViewIfNeeded();

    await checkbox.click();
  }

  async unselectItem(itemName) {
    await this.selectItem(itemName);
  }

  async expandItem(itemName) {
    const treeNode = this.getTreeNode(itemName);

    const switcher = treeNode.locator('.rc-tree-switcher');

    await switcher.click();
  }
}

module.exports = { CheckBoxPage };
