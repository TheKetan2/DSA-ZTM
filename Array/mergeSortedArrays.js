const mergeSortedArrays = (arr1, arr2) => {
  return arr1.concat(arr2).sort((a, b) => a - b);
};

const mergeSortedArrays2 = (arr1, arr2) => {
  let sol = [...arr1, ...arr2];
  for (let i = 0; i < sol.length - 1; i++) {
    for (let j = i + 1; j < sol.length; j++) {
      if (sol[i] > sol[j]) {
        let temp = sol[i];
        sol[i] = sol[j];
        sol[j] = temp;
      }
    }
  }
  return sol;
};
