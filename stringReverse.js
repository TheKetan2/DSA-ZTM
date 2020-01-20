const reverseString = str => {
  return typeof str === "string"
    ? str
        .split("")
        .reverse()
        .join("")
    : "bad input format...";
};

const reverseString2 = str => {
  let sol = "";
  for (let i = str.length - 1; i >= 0; i--) {
    sol += str[i];
  }
  return sol;
};
