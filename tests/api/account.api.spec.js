const { test, expect } = require('../../fixtures/pages.fixture');
const { invalidCredentials } = require('../../test-data/apiData');

test.describe('Account API', () => {
  test('TC-API-004: authorization is rejected for invalid credentials @api @negative', async ({
    accountApi
  }) => {
    const response = await accountApi.authorizeUser(invalidCredentials);
    const responseBody = await response.json();

    expect(response.status()).toBe(404);
    expect(response.headers()['content-type']).toContain('application/json');

    expect(responseBody).toHaveProperty('code');
    expect(responseBody).toHaveProperty('message');
    expect(typeof responseBody.message).toBe('string');
  });

  test('TC-API-005: token cannot be generated for unknown user @api @negative', async ({
    accountApi
  }) => {
    const response = await accountApi.generateToken(invalidCredentials);
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty('status');
    expect(responseBody).toHaveProperty('result');
    expect(responseBody.status).toBe('Failed');
    expect(responseBody.result).toBe('User authorization failed.');
  });
});
