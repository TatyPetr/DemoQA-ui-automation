const { BaseApiClient } = require('./BaseApiClient');

class AccountApiClient extends BaseApiClient {
  async authorizeUser(credentials) {
    return this.request.post(this.buildUrl('/Account/v1/Authorized'), {
      data: credentials
    });
  }

  async generateToken(credentials) {
    return this.request.post(this.buildUrl('/Account/v1/GenerateToken'), {
      data: credentials
    });
  }
}

module.exports = { AccountApiClient };
