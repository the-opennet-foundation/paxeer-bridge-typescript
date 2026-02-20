// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxeerBridge from '@paxeer-network/paxeer-bridge';

const client = new PaxeerBridge({
  walletSignature: 'My Wallet Signature',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource referral', () => {
  // Mock server tests are disabled
  test.skip('applyCode: only required params', async () => {
    const responsePromise = client.rewards.referral.applyCode({
      referralCode: 'PAXEER123',
      userAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('applyCode: required and optional params', async () => {
    const response = await client.rewards.referral.applyCode({
      referralCode: 'PAXEER123',
      userAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveLeaderboard', async () => {
    const responsePromise = client.rewards.referral.retrieveLeaderboard();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveLeaderboard: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rewards.referral.retrieveLeaderboard({ limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PaxeerBridge.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveStatistics', async () => {
    const responsePromise = client.rewards.referral.retrieveStatistics(
      '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
