function maxSubarrySum(array, k) {
    let n = array.length;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += array[i];
    }


    let windowSum = sum;

    for (let j = k; j < n - 1; j++) {
        windowSum = windowSum - array[j - k] + array[j];
        sum = Math.max(windowSum, sum)
    }

    return sum;

}



const max = maxSubarrySum([2, 1, 5, 1, 3, 2], 3)
console.log(max)