const { test, expect } = require('../../fixtures/pages.fixture');

test.describe('Book Store', () => {
  test('TC-UI-023: API book is displayed in Book Store search @smoke', async ({
    bookStorePage,
    bookStoreApi
  }) => {
    const response = await bookStoreApi.getBooks();
    const responseBody = await response.json();
    const book = responseBody.books[0];

    await bookStorePage.open();

    await bookStorePage.waitForBookToAppear(book.title);

    await bookStorePage.searchBook(book.title);

    await expect(bookStorePage.searchInput).toHaveValue(book.title);
    await expect(bookStorePage.getBookLink(book.title)).toBeVisible();
  });

  test('TC-UI-024: user sees no books after searching for an unknown title @negative', async ({
    bookStorePage
  }) => {
    const unknownBookTitle = 'BookThatDoesNotExist123456';

    await bookStorePage.open();
    await bookStorePage.searchBook(unknownBookTitle);

    await expect(bookStorePage.getBookLink(unknownBookTitle)).toHaveCount(0);
  });

  test('TC-UI-025: user can open book details and verify data @smoke', async ({
    bookStorePage,
    bookDetailsPage,
    bookStoreApi
  }) => {
    const response = await bookStoreApi.getBooks();
    const responseBody = await response.json();
    const book = responseBody.books[0];

    await bookStorePage.open();

    // Ждём загрузки книги в таблицу.
    await bookStorePage.waitForBookToAppear(book.title);

    await bookStorePage.openBook(book.title);

    await expect(bookDetailsPage.title).toHaveText(book.title);
    await expect(bookDetailsPage.author).toHaveText(book.author);
    await expect(bookDetailsPage.publisher).toHaveText(book.publisher);
    await expect(bookDetailsPage.isbn).toHaveText(book.isbn);
  });
});
