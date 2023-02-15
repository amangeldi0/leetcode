function twoSum(nums, target) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var currentNum = nums[i];
        for (var j = 1; j < nums.length; j++) {
            if (currentNum + nums[j] === target) {
                result.push(i, j);
                break;
            }
        }
        if (result) {
            break;
        }
    }
    return result;
}
;
console.log(twoSum([3, 3], 6));
