function spiralMatrix(arr) {
  let i,
    top = 0,
    left = 0; 
    bottom = arr.length;
    right = arr[0].length,
    res = [];
  while (top < bottom && left < right) {
    for (i = left; i < right; ++i) {
      res.push(arr[top][i]);
    }
    top++; 
    for (i = top; i < bottom; ++i) {
      res.push(arr[i][right - 1]);
    }
    right--; 
    if (top < bottom) {
      for (i = right - 1; i >= left; --i) {
        res.push(arr[bottom - 1][i]);
      }
      bottom--;
    } 
    if (left < right) {
      for (i = bottom - 1; i >= top; --i) {
        res.push(arr[i][left]);
      }
      left++;
    }
  }
  console.log(res);
}

spiralMatrix([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] );