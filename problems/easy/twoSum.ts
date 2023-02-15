function twoSum(nums: number[], target: number): number[] {

    const result: number[] = []

    for (let i: number = 0; i < nums.length; i++) {

        const currentNum = nums[i]

        for (let j: number = i + 1; j < nums.length; j++) {


            if (currentNum + nums[j] === target){
                result.push(i, j)
                break;
            }

        }
        if (result.length !== 0){
            break;
        }
    }

    return result
}

console.log(twoSum([3,3], 6))