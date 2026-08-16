class BaseApiClient {
  constructor(request) {
    this.request = request;
    this.baseApiUrl = process.env.API_BASE_URL || 'https://demoqa.com';
  }

  buildUrl(path) {
    return `${this.baseApiUrl}${path}`;
  }
}

module.exports = { BaseApiClient };
