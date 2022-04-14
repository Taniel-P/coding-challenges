var coinChange = function(coins, amount) {
  let dp = new Array(amount+1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
      for (let j = 0; j < coins.length; j++) {
          if (coins[j] > i) {
              console.log('I', i)
              console.log('J', coins[j])
              continue;
          }
          console.log('DP[I]', dp[i])
          console.log('DP[COIN]', dp[i-coins[j]])
          dp[i] = Math.min(dp[i], dp[i-coins[j]]+1);
          console.log(dp)
      }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};