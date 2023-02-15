//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100]
// After sorting, it becomes [0,1,9,16,100]
function sortedSquares(nums) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < (nums.length - i - 1); j++) {
            if (nums[j] > nums[j + 1]) {
                var temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    for (var numsKey in nums) {
        result.push(nums[numsKey] * nums[numsKey]);
    }
    return result;
}
;
console.log(sortedSquares([234, 43, 55, 63, 5, 6, 235, 547]));
