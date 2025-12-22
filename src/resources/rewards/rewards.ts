// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RewardsAPI from './rewards';
import * as ReferralAPI from './referral';
import {
  Referral,
  ReferralApplyCodeParams,
  ReferralApplyCodeResponse,
  ReferralRetrieveLeaderboardParams,
  ReferralRetrieveLeaderboardResponse,
  ReferralRetrieveStatisticsResponse,
} from './referral';
import * as StakingAPI from './staking';
import {
  Staking,
  StakingCreatePositionParams,
  StakingCreatePositionResponse,
  StakingRetrievePoolsParams,
  StakingRetrievePoolsResponse,
  StakingRetrievePositionsResponse,
  StakingUnstakePositionParams,
  StakingUnstakePositionResponse,
} from './staking';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Rewards extends APIResource {
  referral: ReferralAPI.Referral = new ReferralAPI.Referral(this._client);
  staking: StakingAPI.Staking = new StakingAPI.Staking(this._client);

  /**
   * Retrieve current rewards system configuration including rates, tiers, and
   * bonuses
   *
   * @example
   * ```ts
   * const response = await client.rewards.retrieveConfig();
   * ```
   */
  retrieveConfig(options?: RequestOptions): APIPromise<RewardRetrieveConfigResponse> {
    return this._client.get('/rewards/config', options);
  }

  /**
   * Retrieve comprehensive rewards information for a user including:
   *
   * - Total points and current tier
   * - Pending and distributed rewards
   * - Bridge volume and transaction count
   * - Tier progress and next tier requirements
   *
   * @example
   * ```ts
   * const response = await client.rewards.retrieveDashboard(
   *   '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
   * );
   * ```
   */
  retrieveDashboard(address: string, options?: RequestOptions): APIPromise<RewardRetrieveDashboardResponse> {
    return this._client.get(path`/rewards/dashboard/${address}`, options);
  }

  /**
   * Retrieve top users by volume or points
   *
   * @example
   * ```ts
   * const response = await client.rewards.retrieveLeaderboard();
   * ```
   */
  retrieveLeaderboard(
    query: RewardRetrieveLeaderboardParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RewardRetrieveLeaderboardResponse> {
    return this._client.get('/rewards/leaderboard', { query, ...options });
  }
}

export interface Reward {
  id?: number;

  amount?: string;

  createdAt?: number;

  distributedAt?: number | null;

  rewardType?: 'bridge' | 'referral' | 'staking';

  status?: 'pending' | 'queued' | 'distributed';

  tokenSymbol?: string;

  usdValue?: string;

  userAddress?: string;
}

export interface RewardRetrieveConfigResponse {
  data?: RewardRetrieveConfigResponse.Data;

  success?: boolean;
}

export namespace RewardRetrieveConfigResponse {
  export interface Data {
    /**
     * PXR tokens rewarded per USD bridged
     */
    bridgeRewardRate?: number;

    earlyBirdEndsAt?: number;

    earlyBirdMultiplier?: number;

    isEarlyBird?: boolean;

    /**
     * Points earned per USD bridged
     */
    pointsPerUsd?: number;

    refereeBonus?: number;

    referralRewardRate?: number;

    tiers?: { [key: string]: Data.Tiers };
  }

  export namespace Data {
    export interface Tiers {
      minVolume?: number;

      name?: string;

      pointsMultiplier?: number;

      rewardBonus?: number;
    }
  }
}

export interface RewardRetrieveDashboardResponse {
  data?: RewardRetrieveDashboardResponse.Data;

  success?: boolean;
}

export namespace RewardRetrieveDashboardResponse {
  export interface Data {
    rewards?: Data.Rewards;

    tierProgress?: Data.TierProgress;

    user?: Data.User;
  }

  export namespace Data {
    export interface Rewards {
      distributed?: Array<RewardsAPI.Reward>;

      pending?: Array<RewardsAPI.Reward>;

      totalDistributed?: string;

      totalPending?: string;
    }

    export interface TierProgress {
      currentTier?: string;

      nextTier?: string | null;

      volumeProgress?: string;

      volumeRequired?: string | null;
    }

    export interface User {
      address?: string;

      referralCode?: string;

      referredBy?: string | null;

      tier?: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';

      totalBridgeCount?: number;

      totalBridgeVolume?: string;

      totalPoints?: number;
    }
  }
}

export interface RewardRetrieveLeaderboardResponse {
  data?: Array<RewardRetrieveLeaderboardResponse.Data>;

  success?: boolean;
}

export namespace RewardRetrieveLeaderboardResponse {
  export interface Data {
    address?: string;

    rank?: number;

    tier?: string;

    totalBridgeVolume?: string;

    totalPoints?: number;
  }
}

export interface RewardRetrieveLeaderboardParams {
  /**
   * Number of users to return
   */
  limit?: number;

  /**
   * Leaderboard type
   */
  type?: 'volume' | 'points';
}

Rewards.Referral = Referral;
Rewards.Staking = Staking;

export declare namespace Rewards {
  export {
    type Reward as Reward,
    type RewardRetrieveConfigResponse as RewardRetrieveConfigResponse,
    type RewardRetrieveDashboardResponse as RewardRetrieveDashboardResponse,
    type RewardRetrieveLeaderboardResponse as RewardRetrieveLeaderboardResponse,
    type RewardRetrieveLeaderboardParams as RewardRetrieveLeaderboardParams,
  };

  export {
    Referral as Referral,
    type ReferralApplyCodeResponse as ReferralApplyCodeResponse,
    type ReferralRetrieveLeaderboardResponse as ReferralRetrieveLeaderboardResponse,
    type ReferralRetrieveStatisticsResponse as ReferralRetrieveStatisticsResponse,
    type ReferralApplyCodeParams as ReferralApplyCodeParams,
    type ReferralRetrieveLeaderboardParams as ReferralRetrieveLeaderboardParams,
  };

  export {
    Staking as Staking,
    type StakingCreatePositionResponse as StakingCreatePositionResponse,
    type StakingRetrievePoolsResponse as StakingRetrievePoolsResponse,
    type StakingRetrievePositionsResponse as StakingRetrievePositionsResponse,
    type StakingUnstakePositionResponse as StakingUnstakePositionResponse,
    type StakingCreatePositionParams as StakingCreatePositionParams,
    type StakingRetrievePoolsParams as StakingRetrievePoolsParams,
    type StakingUnstakePositionParams as StakingUnstakePositionParams,
  };
}
