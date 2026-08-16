const { BaseApiClient } = require('./BaseApiClient');

class BookStoreApiClient extends BaseApiClient {
  async getBooks() {
    return this.request.get(this.buildUrl('/BookStore/v1/Books'));
  }

  async getBookByIsbn(isbn) {
    return this.request.get(
      this.buildUrl(`/BookStore/v1/Book?ISBN=${encodeURIComponent(isbn)}`)
    );
  }
}

module.exports = { BookStoreApiClient };
