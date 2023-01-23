const fs = require('fs');

// Set the number of random numbers to generate and the upper bound for the numbers
const n = 10;
const x = 100;

// Generate N random numbers between 1 and X
const numbers = Array.from({ length: n }, () => Math.floor(Math.random() * x) + 1);

// Calculate the probability of each number
const counts = numbers.reduce((counts, number) => {
  counts[number] = (counts[number] || 0) + 1;
  return counts;
}, {});
const total = numbers.length;
const probabilities = Object.keys(counts).reduce((probabilities, number) => {
  probabilities[number] = counts[number] / total;
  return probabilities;
}, {});

// Generate a file name based on the values of N and X
const fileName = `javascript_${n}_${x}.csv`;

// Create the "outputs" directory if it does not exist
if (!fs.existsSync('outputs')) {
  fs.mkdirSync('outputs');
}

// Write the probabilities to a file in the "outputs" directory
const output = Object.keys(probabilities)
  .map(number => `${number},${probabilities[number]}`)
  .join('\n');
fs.writeFileSync(`outputs/${fileName}`, output);
