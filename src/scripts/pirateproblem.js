// You are a pirate. You and your crew of pirates are planning to plunder parked ships on a pier. 
// Each ship has a certain amount of gold stashed. 
// The only constraint stopping you from robbing each of them is that watchers on each ship will alert adjacent ships, and your crew is not big enough to fight two ships at the same time. 
// Therefore, two adjacent ships cannot be plundered on the same night.

// Given an integer array nums representing the amount of gold of each ship, return the maximum amount of gold you can rob tonight.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob ship 1 (money = 1) and then rob ship 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob ship 1 (money = 2), rob ship 3 (money = 9) and rob ship 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

function pirate(array) {
  let start1 = 0
  let start2 = 0
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      start1 += array[i]
    } else {
      start2 += array[i]
    }
  }
  return Math.max(start1, start2)
}