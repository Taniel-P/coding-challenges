// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3


var canCompleteCircuit = function(gas, cost) {
  let tank = 0;
  let carPosition = 0;
  let startingPosition = 0;
  let total = 0;
  for (let i = 0; i < gas.length; i++) {

      tank += gas[i];
      tank -= cost[i];
      total += gas[i];
      total -= cost[i]

      if (tank >= 0) {
          carPosition++;

      }

      if (tank < 0) {
          carPosition++;
          startingPosition = carPosition;
          tank = 0;
      }
  }
  if (total >= 0) {
      return startingPosition;
  } else {
      return -1;
  }
};