// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Referral extends APIResource {
  /**
   * Apply a referral code to link new user with referrer
   *
   * @example
   * ```ts
   * const response = await client.rewards.referral.applyCode({
   *   referralCode: 'PAXEER123',
   *   userAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
   * });
   * ```
   */
  applyCode(body: ReferralApplyCodeParams, options?: RequestOptions): APIPromise<ReferralApplyCodeResponse> {
    return this._client.post('/rewards/referral/apply', { body, ...options });
  }

  /**
   * Retrieve leaderboard of users with most referrals
   *
   * @example
   * ```ts
   * const response =
   *   await client.rewards.referral.retrieveLeaderboard();
   * ```
   */
  retrieveLeaderboard(
    query: ReferralRetrieveLeaderboardParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReferralRetrieveLeaderboardResponse> {
    return this._client.get('/rewards/referral/leaderboard', { query, ...options });
  }

  /**
   * Retrieve user's referral code, stats, and earnings
   *
   * @example
   * ```ts
   * const response =
   *   await client.rewards.referral.retrieveStatistics(
   *     '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
   *   );
   * ```
   */
  retrieveStatistics(
    address: string,
    options?: RequestOptions,
  ): APIPromise<ReferralRetrieveStatisticsResponse> {
    return this._client.get(path`/rewards/referral/${address}`, options);
  }
}

export interface ReferralApplyCodeResponse {
  bonusRate?: string | null;

  error?: string | null;

  referrer?: string | null;

  success?: boolean;
}

export interface ReferralRetrieveLeaderboardResponse {
  data?: Array<ReferralRetrieveLeaderboardResponse.Data>;

  success?: boolean;
}

export namespace ReferralRetrieveLeaderboardResponse {
  export interface Data {
    rank?: number;

    referrerAddress?: string;

    totalReferrals?: number;

    totalRewards?: string;

    totalVolume?: string;
  }
}

export interface ReferralRetrieveStatisticsResponse {
  data?: ReferralRetrieveStatisticsResponse.Data;

  success?: boolean;
}

export namespace ReferralRetrieveStatisticsResponse {
  export interface Data {
    activeReferrals?: number;

    referralCode?: string;

    referrals?: Array<Data.Referral>;

    totalReferrals?: number;

    totalRewards?: string;

    totalVolume?: string;
  }

  export namespace Data {
    export interface Referral {
      isActive?: boolean;

      refereeAddress?: string;

      signupDate?: number;

      totalVolume?: string;
    }
  }
}

export interface ReferralApplyCodeParams {
  /**
   * Referrer's code (6 uppercase letters/numbers)
   */
  referralCode: string;

  /**
   * New user's wallet address
   */
  userAddress: string;
}

export interface ReferralRetrieveLeaderboardParams {
  /**
   * Number of referrers to return
   */
  limit?: number;
}

export declare namespace Referral {
  export {
    type ReferralApplyCodeResponse as ReferralApplyCodeResponse,
    type ReferralRetrieveLeaderboardResponse as ReferralRetrieveLeaderboardResponse,
    type ReferralRetrieveStatisticsResponse as ReferralRetrieveStatisticsResponse,
    type ReferralApplyCodeParams as ReferralApplyCodeParams,
    type ReferralRetrieveLeaderboardParams as ReferralRetrieveLeaderboardParams,
  };
}
