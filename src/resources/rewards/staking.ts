// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Staking extends APIResource {
  /**
   * Stake tokens with optional lock period for higher APY
   *
   * @example
   * ```ts
   * const response =
   *   await client.rewards.staking.createPosition({
   *     amount: '1000',
   *     tokenSymbol: 'PXR',
   *     userAddress:
   *       '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
   *     lockPeriodDays: 90,
   *   });
   * ```
   */
  createPosition(
    body: StakingCreatePositionParams,
    options?: RequestOptions,
  ): APIPromise<StakingCreatePositionResponse> {
    return this._client.post('/rewards/staking/stake', { body, ...options });
  }

  /**
   * Retrieve available staking pools with APY and lock period options
   *
   * @example
   * ```ts
   * const response =
   *   await client.rewards.staking.retrievePools();
   * ```
   */
  retrievePools(
    query: StakingRetrievePoolsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StakingRetrievePoolsResponse> {
    return this._client.get('/rewards/staking/pools', { query, ...options });
  }

  /**
   * Retrieve all staking positions for a user with rewards
   *
   * @example
   * ```ts
   * const response =
   *   await client.rewards.staking.retrievePositions(
   *     '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
   *   );
   * ```
   */
  retrievePositions(address: string, options?: RequestOptions): APIPromise<StakingRetrievePositionsResponse> {
    return this._client.get(path`/rewards/staking/${address}`, options);
  }

  /**
   * Unstake tokens from a position. Early unstaking (before lock period ends) incurs
   * penalties:
   *
   * - 10% penalty on principal
   * - 50% penalty on accrued rewards
   *
   * @example
   * ```ts
   * const response =
   *   await client.rewards.staking.unstakePosition({
   *     positionId: 123,
   *     userAddress:
   *       '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
   *   });
   * ```
   */
  unstakePosition(
    body: StakingUnstakePositionParams,
    options?: RequestOptions,
  ): APIPromise<StakingUnstakePositionResponse> {
    return this._client.post('/rewards/staking/unstake', { body, ...options });
  }
}

export interface StakingCreatePositionResponse {
  data?: StakingCreatePositionResponse.Data;

  success?: boolean;
}

export namespace StakingCreatePositionResponse {
  export interface Data {
    amount?: string;

    apy?: number;

    estimatedRewards?: string;

    lockPeriod?: number;

    positionId?: number;

    tokenSymbol?: string;

    unlocksAt?: number | null;
  }
}

export interface StakingRetrievePoolsResponse {
  data?: Array<StakingRetrievePoolsResponse.Data>;

  success?: boolean;
}

export namespace StakingRetrievePoolsResponse {
  export interface Data {
    enabled?: boolean;

    lockPeriods?: { [key: string]: Data.LockPeriods };

    minStake?: number;

    tokenSymbol?: string;

    userTierBonus?: number | null;
  }

  export namespace Data {
    export interface LockPeriods {
      apy?: number;

      days?: number;
    }
  }
}

export interface StakingRetrievePositionsResponse {
  data?: StakingRetrievePositionsResponse.Data;

  success?: boolean;
}

export namespace StakingRetrievePositionsResponse {
  export interface Data {
    positions?: Array<Data.Position>;

    summary?: { [key: string]: Data.Summary };

    totalRewards?: string;

    totalStaked?: string;
  }

  export namespace Data {
    export interface Position {
      id?: number;

      accruedRewards?: string;

      amount?: string;

      apy?: number;

      canUnstake?: boolean;

      earlyUnstakePenalty?: Position.EarlyUnstakePenalty | null;

      isLocked?: boolean;

      lockPeriod?: number;

      stakedAt?: number;

      tokenSymbol?: string;

      unlocksAt?: number | null;
    }

    export namespace Position {
      export interface EarlyUnstakePenalty {
        principalPenalty?: string;

        rewardsPenalty?: string;
      }
    }

    export interface Summary {
      count?: number;

      rewards?: string;

      staked?: string;
    }
  }
}

export interface StakingUnstakePositionResponse {
  data?: StakingUnstakePositionResponse.Data;

  success?: boolean;
}

export namespace StakingUnstakePositionResponse {
  export interface Data {
    message?: string;

    netAmount?: string;

    penalty?: Data.Penalty | null;

    positionId?: number;

    principal?: string;

    rewards?: string;
  }

  export namespace Data {
    export interface Penalty {
      principalPenalty?: string;

      rewardsPenalty?: string;
    }
  }
}

export interface StakingCreatePositionParams {
  /**
   * Amount to stake
   */
  amount: string;

  /**
   * Token to stake
   */
  tokenSymbol: string;

  userAddress: string;

  /**
   * Lock period in days (0 for flexible, or 30/90/180/365)
   */
  lockPeriodDays?: 0 | 30 | 90 | 180 | 365;
}

export interface StakingRetrievePoolsParams {
  /**
   * Optional user address for personalized APY calculation
   */
  userAddress?: string;
}

export interface StakingUnstakePositionParams {
  /**
   * Staking position ID to unstake
   */
  positionId: number;

  userAddress: string;
}

export declare namespace Staking {
  export {
    type StakingCreatePositionResponse as StakingCreatePositionResponse,
    type StakingRetrievePoolsResponse as StakingRetrievePoolsResponse,
    type StakingRetrievePositionsResponse as StakingRetrievePositionsResponse,
    type StakingUnstakePositionResponse as StakingUnstakePositionResponse,
    type StakingCreatePositionParams as StakingCreatePositionParams,
    type StakingRetrievePoolsParams as StakingRetrievePoolsParams,
    type StakingUnstakePositionParams as StakingUnstakePositionParams,
  };
}
