// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Bridge extends APIResource {
  /**
   * Check if the bridge API is operational
   *
   * @example
   * ```ts
   * const response = await client.bridge.checkHealth();
   * ```
   */
  checkHealth(options?: RequestOptions): APIPromise<BridgeCheckHealthResponse> {
    return this._client.get('/bridge/health', options);
  }

  /**
   * Confirm that user has sent the deposit transaction. System will monitor the
   * blockchain for confirmation.
   *
   * @example
   * ```ts
   * const response = await client.bridge.confirm({
   *   bridgeId: '550e8400-e29b-41d4-a716-446655440000',
   *   txHash:
   *     '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
   * });
   * ```
   */
  confirm(body: BridgeConfirmParams, options?: RequestOptions): APIPromise<BridgeConfirmResponse> {
    return this._client.post('/bridge/confirm', { body, ...options });
  }

  /**
   * Create a new bridge transaction to transfer assets between networks. Returns
   * deposit address and transaction details.
   *
   * @example
   * ```ts
   * const response = await client.bridge.initiate({
   *   amount: '100',
   *   fromNetwork: 'ethereum',
   *   tokenSymbol: 'USDC',
   *   toNetwork: 'base',
   *   userAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
   * });
   * ```
   */
  initiate(body: BridgeInitiateParams, options?: RequestOptions): APIPromise<BridgeInitiateResponse> {
    return this._client.post('/bridge/initiate', { body, ...options });
  }

  /**
   * Retrieve global bridge statistics across all networks
   *
   * @example
   * ```ts
   * const response = await client.bridge.retrieveStats();
   * ```
   */
  retrieveStats(options?: RequestOptions): APIPromise<BridgeRetrieveStatsResponse> {
    return this._client.get('/bridge/stats', options);
  }

  /**
   * Retrieve detailed status of a bridge transaction including logs and timestamps
   *
   * @example
   * ```ts
   * const response = await client.bridge.retrieveStatus(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  retrieveStatus(bridgeID: string, options?: RequestOptions): APIPromise<BridgeRetrieveStatusResponse> {
    return this._client.get(path`/bridge/status/${bridgeID}`, options);
  }

  /**
   * Retrieve all bridge transactions for a specific user address
   *
   * @example
   * ```ts
   * const response =
   *   await client.bridge.retrieveUserTransactions(
   *     '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
   *   );
   * ```
   */
  retrieveUserTransactions(
    userAddress: string,
    query: BridgeRetrieveUserTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BridgeRetrieveUserTransactionsResponse> {
    return this._client.get(path`/bridge/user/${userAddress}`, { query, ...options });
  }
}

export interface BridgeCheckHealthResponse {
  status?: 'operational' | 'degraded' | 'down';

  success?: boolean;

  timestamp?: number;
}

export interface BridgeConfirmResponse {
  data?: BridgeConfirmResponse.Data;

  success?: boolean;
}

export namespace BridgeConfirmResponse {
  export interface Data {
    bridgeId?: string;

    message?: string;

    status?: string;
  }
}

export interface BridgeInitiateResponse {
  data?: BridgeInitiateResponse.Data;

  success?: boolean;
}

export namespace BridgeInitiateResponse {
  export interface Data {
    bridgeId?: string;

    /**
     * Additional early bird bonus (if applicable)
     */
    earlyBirdBonus?: string;

    /**
     * Estimated PXR reward
     */
    estimatedReward?: string;

    /**
     * Timestamp when transaction expires
     */
    expiresAt?: number;

    /**
     * Bridge fee amount
     */
    fee?: string;

    /**
     * Bridge fee in USD
     */
    feeUsd?: string;

    fromAmount?: string;

    fromNetwork?: string;

    fromToken?: string;

    status?: 'pending' | 'deposited' | 'confirmed' | 'sending' | 'completed' | 'failed' | 'expired';

    /**
     * Amount user will receive after fees
     */
    toAmount?: string;

    toNetwork?: string;

    toToken?: string;

    transactionData?: Data.TransactionData;
  }

  export namespace Data {
    export interface TransactionData {
      /**
       * Transaction data (if needed)
       */
      data?: string;

      /**
       * Deposit address
       */
      to?: string;

      /**
       * Amount to send (in wei for EVM)
       */
      value?: string;
    }
  }
}

export interface BridgeRetrieveStatsResponse {
  data?: BridgeRetrieveStatsResponse.Data;

  success?: boolean;
}

export namespace BridgeRetrieveStatsResponse {
  export interface Data {
    stats?: Array<Data.Stat>;

    timestamp?: number;
  }

  export namespace Data {
    export interface Stat {
      lastUpdated?: number;

      network?: string;

      totalVolume?: string;

      totalVolumeUsd?: string;

      transactionCount?: number;
    }
  }
}

export interface BridgeRetrieveStatusResponse {
  data?: BridgeRetrieveStatusResponse.Data;

  success?: boolean;
}

export namespace BridgeRetrieveStatusResponse {
  export interface Data {
    id?: string;

    amount?: string;

    confirmations?: number;

    createdAt?: number;

    depositTxHash?: string | null;

    expiresAt?: number;

    fromNetwork?: string;

    logs?: Array<Data.Log>;

    requiredConfirmations?: number;

    sendTxHash?: string | null;

    status?: 'pending' | 'deposited' | 'confirmed' | 'sending' | 'completed' | 'failed' | 'expired';

    tokenSymbol?: string;

    toNetwork?: string;

    updatedAt?: number;

    userAddress?: string;
  }

  export namespace Data {
    export interface Log {
      message?: string;

      status?: string;

      timestamp?: number;
    }
  }
}

export interface BridgeRetrieveUserTransactionsResponse {
  data?: BridgeRetrieveUserTransactionsResponse.Data;

  success?: boolean;
}

export namespace BridgeRetrieveUserTransactionsResponse {
  export interface Data {
    total?: number;

    transactions?: Array<Data.Transaction>;
  }

  export namespace Data {
    export interface Transaction {
      id?: string;

      amount?: string;

      completedAt?: number | null;

      createdAt?: number;

      depositTxHash?: string | null;

      fromNetwork?: string;

      sendTxHash?: string | null;

      status?: string;

      tokenSymbol?: string;

      toNetwork?: string;

      userAddress?: string;
    }
  }
}

export interface BridgeConfirmParams {
  /**
   * Bridge transaction ID from initiate response
   */
  bridgeId: string;

  /**
   * Transaction hash from user's deposit
   */
  txHash: string;
}

export interface BridgeInitiateParams {
  /**
   * Amount to bridge (in token units)
   */
  amount: string;

  /**
   * Source blockchain network
   */
  fromNetwork:
    | 'ethereum'
    | 'base'
    | 'bsc'
    | 'arbitrum'
    | 'optimism'
    | 'polygon'
    | 'avalanche'
    | 'fantom'
    | 'celo'
    | 'paxeer'
    | 'hyperliquid'
    | 'flow'
    | 'tron'
    | 'bitcoin'
    | 'abstract'
    | 'berachain'
    | 'mantle'
    | 'zksync'
    | 'starknet'
    | 'unichain'
    | 'worldchain'
    | 'hyperevm'
    | 'monad'
    | 'sei'
    | 'solana';

  /**
   * Token symbol to bridge
   */
  tokenSymbol: string;

  /**
   * Destination blockchain network
   */
  toNetwork: string;

  /**
   * User's wallet address
   */
  userAddress: string;
}

export interface BridgeRetrieveUserTransactionsParams {
  /**
   * Maximum number of transactions to return
   */
  limit?: number;
}

export declare namespace Bridge {
  export {
    type BridgeCheckHealthResponse as BridgeCheckHealthResponse,
    type BridgeConfirmResponse as BridgeConfirmResponse,
    type BridgeInitiateResponse as BridgeInitiateResponse,
    type BridgeRetrieveStatsResponse as BridgeRetrieveStatsResponse,
    type BridgeRetrieveStatusResponse as BridgeRetrieveStatusResponse,
    type BridgeRetrieveUserTransactionsResponse as BridgeRetrieveUserTransactionsResponse,
    type BridgeConfirmParams as BridgeConfirmParams,
    type BridgeInitiateParams as BridgeInitiateParams,
    type BridgeRetrieveUserTransactionsParams as BridgeRetrieveUserTransactionsParams,
  };
}
