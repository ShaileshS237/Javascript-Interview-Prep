
// Brute Force - Time O(n2) Extra space O(n2) 

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let row = matrix.length;
    let col = matrix[0].length;

    let ans = Array.from({ length: row }, () => Array(row).fill(0));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            ans[j][row - 1 - i] = matrix[i][j];
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            matrix[i][j] = ans[i][j];
        }
    }
};

// Optimal - Transpose then traverse the

let n = matrix.length;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
}

for (let i = 0; i < n; i++) {
    matrix[i].reverse()
}



