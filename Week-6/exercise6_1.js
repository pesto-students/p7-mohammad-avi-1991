const max_sum = (arr) => {
    let sum = 0;
    let max = arr[0];

    for(let n of arr) {
        if(sum < 0) {
            sum = 0;
        }
        sum += n;
        max = Math.max(sum, max);
    }
    console.log(max);
    return max;
}

max_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);