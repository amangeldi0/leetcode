'not solved'

// function romanToInt(s: string): number {
//     const map = {
//         'I':1,
//         'V':5,
//         'X':10,
//         'L':50,
//         'C':100,
//         'D':500,
//         'M':1000,
//         'IV':4,
//         'IX':9,
//         'XL':40,
//         'XC':90,
//         'CD':400,
//         'CM':900
//     };
//
//     let result: number = 0;
//
//     s.split('').map(cen => {
//         for (const [key, value] of Object.entries(map)) {
//             if (cen === key){
//                 result += value
//                 break;
//             }
//         }
//     })
//
//     return result
// };