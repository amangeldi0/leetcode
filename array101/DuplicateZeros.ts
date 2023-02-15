//Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

//Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.


// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

function duplicateZeros(arr: number[]): number[] {

    const result: number[] = []
    for (const arrKey in arr) {
        if (arr[arrKey] === 0){
            if (result.length < arr.length){
                result.push(arr[arrKey])
                result.push(arr[arrKey])
            }
        }else {
            if (result.length < arr.length){
                result.push(arr[arrKey])
            }
        }
    }
    return result
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0]))
