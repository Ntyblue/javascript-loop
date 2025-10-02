// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
const compareScore = scores[0];
for (let i = 1; i < scores.length; i++) {
  if (compareScore > scores[i]) {
    minScore = scores[i];
  } else {
    minScore = minScore;
  }
}

console.log(minScore);
