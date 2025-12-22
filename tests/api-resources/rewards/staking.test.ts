// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxeerBridge from 'paxeer-bridge';

const client = new PaxeerBridge({
  walletSignature: 'My Wallet Signature',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource staking', () => {
  // Prism tests are disabled
  test.skip('createPosition: only required params', async () => {
    const responsePromise = client.rewards.staking.createPosition({
      amount: '1000',
      tokenSymbol: 'PXR',
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

  // Prism tests are disabled
  test.skip('createPosition: required and optional params', async () => {
    const response = await client.rewards.staking.createPosition({
      amount: '1000',
      tokenSymbol: 'PXR',
      userAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
      lockPeriodDays: 90,
    });
  });

  // Prism tests are disabled
  test.skip('retrievePools', async () => {
    const responsePromise = client.rewards.staking.retrievePools();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrievePools: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rewards.staking.retrievePools(
        { userAddress: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PaxeerBridge.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrievePositions', async () => {
    const responsePromise = client.rewards.staking.retrievePositions(
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

  // Prism tests are disabled
  test.skip('unstakePosition: only required params', async () => {
    const responsePromise = client.rewards.staking.unstakePosition({
      positionId: 123,
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

  // Prism tests are disabled
  test.skip('unstakePosition: required and optional params', async () => {
    const response = await client.rewards.staking.unstakePosition({
      positionId: 123,
      userAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    });
  });
});
