// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxeerBridge from 'paxeer-bridge';

const client = new PaxeerBridge({
  walletSignature: 'My Wallet Signature',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rewards', () => {
  // Prism tests are disabled
  test.skip('retrieveConfig', async () => {
    const responsePromise = client.rewards.retrieveConfig();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveDashboard', async () => {
    const responsePromise = client.rewards.retrieveDashboard('0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveLeaderboard', async () => {
    const responsePromise = client.rewards.retrieveLeaderboard();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveLeaderboard: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rewards.retrieveLeaderboard({ limit: 1, type: 'volume' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PaxeerBridge.NotFoundError);
  });
});
