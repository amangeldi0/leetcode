function findMaxConsecutiveOnes(nums) {
    var result = 0;
    var max = 0;
    for (var numsKey in nums) {
        if (nums[numsKey]) {
            result++;
        }
        else {
            if (result > max) {
                max = result;
            }
            result = 0;
        }
    }
    return Math.max(result, max);
}
;
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
