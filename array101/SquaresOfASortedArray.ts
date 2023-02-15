//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order


// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100]
// After sorting, it becomes [0,1,9,16,100]

function sortedSquares(nums: number[]): number[] {

    const result: number[] = []

    for (const numsKey in nums) {
        result.push(nums[numsKey] * nums[numsKey])
    }

    for(let i = 0; i < result.length; i++){

        for(let j = 0; j < ( result.length - i -1 ); j++){

            if(result[j] > result[j+1]){

                let temp = result[j]
                result[j] = nums[j + 1]
                result[j+1] = temp
            }
        }
    }




    return result
};

console.log(sortedSquares([234, 43, 55, 63,  5, 6, 235, 547]))