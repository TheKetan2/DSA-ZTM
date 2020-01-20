const reverseString = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

const reverseString2 = str => {
  let sol = "";
  for (let i = str.length - 1; i >= 0; i--) {
    sol += str[i];
  }
  return sol;
};
