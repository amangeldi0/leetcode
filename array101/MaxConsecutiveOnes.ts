// Given a binary array nums, return the maximum number of consecutive 1's in the array.

//Input: nums = [1,1,0,1,1,1]
//Output: 3
//Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.


function findMaxConsecutiveOnes(nums: number[]): number {
    let result: number = 0;
    let max: number = 0
    for (const numsKey in nums) {

        if (nums[numsKey]){
            result++
        }else {
            if(result > max){
                max = result
            }
            result = 0
        }
    }
    return Math.max(result, max)
};

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))