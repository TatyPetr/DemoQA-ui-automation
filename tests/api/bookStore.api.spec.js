const { test, expect } = require('../../fixtures/pages.fixture');
const { expectBookStructure } = require('../../helpers/responseValidator');
const { validIsbn, invalidIsbn } = require('../../test-data/apiData');

test.describe('Book Store API', () => {
  test('TC-API-001: API returns a list of books @api @smoke', async ({
    bookStoreApi
  }) => {
    const startTime = Date.now();
    const response = await bookStoreApi.getBooks();
    const responseTime = Date.now() - startTime;
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    expect(responseTime).toBeLessThan(5000);

    expect(responseBody).toHaveProperty('books');
    expect(Array.isArray(responseBody.books)).toBe(true);
    expect(responseBody.books.length).toBeGreaterThan(0);

    expectBookStructure(responseBody.books[0]);
  });

  test('TC-API-002: API returns a book by valid ISBN @api', async ({ bookStoreApi }) => {
    const response = await bookStoreApi.getBookByIsbn(validIsbn);
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    expectBookStructure(responseBody);
    expect(responseBody.isbn).toBe(validIsbn);
    expect(responseBody.title).toBe('Git Pocket Guide');
  });

  test('TC-API-003: API returns an error for unknown ISBN @api @negative', async ({
    bookStoreApi
  }) => {
    const response = await bookStoreApi.getBookByIsbn(invalidIsbn);
    const responseBody = await response.json();

    expect(response.status()).toBe(400);
    expect(responseBody).toHaveProperty('code');
    expect(responseBody).toHaveProperty('message');
    expect(typeof responseBody.code).toBe('string');
    expect(typeof responseBody.message).toBe('string');
  });
});
