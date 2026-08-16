const { test, expect } = require('../../fixtures/pages.fixture');

test.describe('Upload and Download', () => {
  test('TC-UI-018: user can upload a file @smoke', async ({ uploadDownloadPage }) => {
    await uploadDownloadPage.open();
    await uploadDownloadPage.uploadTestFile();

    await expect(uploadDownloadPage.uploadedFilePath).toContainText(
      'upload-test-file.txt'
    );
  });

  test('TC-UI-019: user can download a file', async ({ uploadDownloadPage }) => {
    await uploadDownloadPage.open();

    const download = await uploadDownloadPage.downloadFile();

    expect(download.suggestedFilename()).toBeTruthy();
    await expect(download.failure()).resolves.toBeNull();
  });
});
