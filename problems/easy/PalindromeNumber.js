function isPalindrome(x) {
    return x.toString() === x.toString().split('').reverse().join('');
}
;
console.log(isPalindrome(-121));
