const path = require('path');
const { BasePage } = require('./BasePage');

class UploadDownloadPage extends BasePage {
  constructor(page) {
    super(page);

    this.uploadInput = page.locator('#uploadFile');
    this.uploadedFilePath = page.locator('#uploadedFilePath');
    this.downloadButton = page.locator('#downloadButton');
  }

  async open() {
    await super.open('/upload-download');
  }

  async uploadTestFile() {
    const filePath = path.resolve(__dirname, '../test-files/upload-test-file.txt');
    await this.uploadInput.setInputFiles(filePath);
  }

  async downloadFile() {
    const downloadPromise = this.page.waitForEvent('download');
    await this.downloadButton.click();

    return downloadPromise;
  }
}

module.exports = { UploadDownloadPage };
