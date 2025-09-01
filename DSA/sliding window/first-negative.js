function firstNegative(array, k) {

    let n = array.length;
    let allNegative = []

    for (let i = 0; i < k; i++) {
        if (array[i] < 0) allNegative.push(array[i])
        else if (array[i + 1] < 0) allNegative.push(array[i + 1])
        else allNegative.push(0)
    }


    for (let i = k; i < n; i++) {

    }

}