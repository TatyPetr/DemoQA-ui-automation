const { expect } = require('@playwright/test');

function expectBookStructure(book) {
  expect(book).toHaveProperty('isbn');
  expect(book).toHaveProperty('title');
  expect(book).toHaveProperty('author');
  expect(book).toHaveProperty('publisher');

  expect(typeof book.isbn).toBe('string');
  expect(typeof book.title).toBe('string');
  expect(typeof book.author).toBe('string');
  expect(typeof book.publisher).toBe('string');
}

module.exports = { expectBookStructure };
