// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxeerBridge from '@paxeer-network/paxeer-bridge';

const client = new PaxeerBridge({
  walletSignature: 'My Wallet Signature',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bridge', () => {
  // Mock server tests are disabled
  test.skip('checkHealth', async () => {
    const responsePromise = client.bridge.checkHealth();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('confirm: only required params', async () => {
    const responsePromise = client.bridge.confirm({
      bridgeId: '550e8400-e29b-41d4-a716-446655440000',
      txHash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
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
  test.skip('confirm: required and optional params', async () => {
    const response = await client.bridge.confirm({
      bridgeId: '550e8400-e29b-41d4-a716-446655440000',
      txHash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
    });
  });

  // Mock server tests are disabled
  test.skip('initiate: only required params', async () => {
    const responsePromise = client.bridge.initiate({
      amount: '100',
      fromNetwork: 'ethereum',
      tokenSymbol: 'USDC',
      toNetwork: 'base',
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
  test.skip('initiate: required and optional params', async () => {
    const response = await client.bridge.initiate({
      amount: '100',
      fromNetwork: 'ethereum',
      tokenSymbol: 'USDC',
      toNetwork: 'base',
      userAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveStats', async () => {
    const responsePromise = client.bridge.retrieveStats();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveStatus', async () => {
    const responsePromise = client.bridge.retrieveStatus('550e8400-e29b-41d4-a716-446655440000');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveUserTransactions', async () => {
    const responsePromise = client.bridge.retrieveUserTransactions(
      '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveUserTransactions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bridge.retrieveUserTransactions(
        '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
        { limit: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PaxeerBridge.NotFoundError);
  });
});
