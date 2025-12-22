# Bridge

Types:

- <code><a href="./src/resources/bridge.ts">BridgeCheckHealthResponse</a></code>
- <code><a href="./src/resources/bridge.ts">BridgeConfirmResponse</a></code>
- <code><a href="./src/resources/bridge.ts">BridgeInitiateResponse</a></code>
- <code><a href="./src/resources/bridge.ts">BridgeRetrieveStatsResponse</a></code>
- <code><a href="./src/resources/bridge.ts">BridgeRetrieveStatusResponse</a></code>
- <code><a href="./src/resources/bridge.ts">BridgeRetrieveUserTransactionsResponse</a></code>

Methods:

- <code title="get /bridge/health">client.bridge.<a href="./src/resources/bridge.ts">checkHealth</a>() -> BridgeCheckHealthResponse</code>
- <code title="post /bridge/confirm">client.bridge.<a href="./src/resources/bridge.ts">confirm</a>({ ...params }) -> BridgeConfirmResponse</code>
- <code title="post /bridge/initiate">client.bridge.<a href="./src/resources/bridge.ts">initiate</a>({ ...params }) -> BridgeInitiateResponse</code>
- <code title="get /bridge/stats">client.bridge.<a href="./src/resources/bridge.ts">retrieveStats</a>() -> BridgeRetrieveStatsResponse</code>
- <code title="get /bridge/status/{bridgeId}">client.bridge.<a href="./src/resources/bridge.ts">retrieveStatus</a>(bridgeID) -> BridgeRetrieveStatusResponse</code>
- <code title="get /bridge/user/{userAddress}">client.bridge.<a href="./src/resources/bridge.ts">retrieveUserTransactions</a>(userAddress, { ...params }) -> BridgeRetrieveUserTransactionsResponse</code>

# Rewards

Types:

- <code><a href="./src/resources/rewards/rewards.ts">Reward</a></code>
- <code><a href="./src/resources/rewards/rewards.ts">RewardRetrieveConfigResponse</a></code>
- <code><a href="./src/resources/rewards/rewards.ts">RewardRetrieveDashboardResponse</a></code>
- <code><a href="./src/resources/rewards/rewards.ts">RewardRetrieveLeaderboardResponse</a></code>

Methods:

- <code title="get /rewards/config">client.rewards.<a href="./src/resources/rewards/rewards.ts">retrieveConfig</a>() -> RewardRetrieveConfigResponse</code>
- <code title="get /rewards/dashboard/{address}">client.rewards.<a href="./src/resources/rewards/rewards.ts">retrieveDashboard</a>(address) -> RewardRetrieveDashboardResponse</code>
- <code title="get /rewards/leaderboard">client.rewards.<a href="./src/resources/rewards/rewards.ts">retrieveLeaderboard</a>({ ...params }) -> RewardRetrieveLeaderboardResponse</code>

## Referral

Types:

- <code><a href="./src/resources/rewards/referral.ts">ReferralApplyCodeResponse</a></code>
- <code><a href="./src/resources/rewards/referral.ts">ReferralRetrieveLeaderboardResponse</a></code>
- <code><a href="./src/resources/rewards/referral.ts">ReferralRetrieveStatisticsResponse</a></code>

Methods:

- <code title="post /rewards/referral/apply">client.rewards.referral.<a href="./src/resources/rewards/referral.ts">applyCode</a>({ ...params }) -> ReferralApplyCodeResponse</code>
- <code title="get /rewards/referral/leaderboard">client.rewards.referral.<a href="./src/resources/rewards/referral.ts">retrieveLeaderboard</a>({ ...params }) -> ReferralRetrieveLeaderboardResponse</code>
- <code title="get /rewards/referral/{address}">client.rewards.referral.<a href="./src/resources/rewards/referral.ts">retrieveStatistics</a>(address) -> ReferralRetrieveStatisticsResponse</code>

## Staking

Types:

- <code><a href="./src/resources/rewards/staking.ts">StakingCreatePositionResponse</a></code>
- <code><a href="./src/resources/rewards/staking.ts">StakingRetrievePoolsResponse</a></code>
- <code><a href="./src/resources/rewards/staking.ts">StakingRetrievePositionsResponse</a></code>
- <code><a href="./src/resources/rewards/staking.ts">StakingUnstakePositionResponse</a></code>

Methods:

- <code title="post /rewards/staking/stake">client.rewards.staking.<a href="./src/resources/rewards/staking.ts">createPosition</a>({ ...params }) -> StakingCreatePositionResponse</code>
- <code title="get /rewards/staking/pools">client.rewards.staking.<a href="./src/resources/rewards/staking.ts">retrievePools</a>({ ...params }) -> StakingRetrievePoolsResponse</code>
- <code title="get /rewards/staking/{address}">client.rewards.staking.<a href="./src/resources/rewards/staking.ts">retrievePositions</a>(address) -> StakingRetrievePositionsResponse</code>
- <code title="post /rewards/staking/unstake">client.rewards.staking.<a href="./src/resources/rewards/staking.ts">unstakePosition</a>({ ...params }) -> StakingUnstakePositionResponse</code>
