const nemo = ["nemo"];

const findNemo = array => {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found nemo.");
    } else {
      console.log("Not found :(");
    }
  }
  let t1 = performance.now();

  console.log("call to find nemo took : ", t1 - t0);
};

findNemo(nemo);

const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "nigel",
  "squirt",
  "darla",
  "hank",
  "gill",
  "bloat"
];

findNemo(everyone);

// Time Complexity = O(n) Linear Time
