<?php

// Set the number of random numbers to generate and the upper bound for the numbers
$N = 1000000000;
$X = 10;

// Generate N random numbers between 1 and X
$numbers = array_fill(0, $X, 0);
for ($i = 0; $i < $N; $i++) {
  $n = rand(0, $X-1);
  $numbers[$n] += 1;
}

// Calculate the probability of each number
$total = count($numbers);
$probabilities = array_fill(0, $X, 0);
for ($i = 0; $i < $X; $i++) {
  $probabilities[$i] = $numbers[$i] / $N;
}

// Generate a file name based on the values of N and X
$fileName = sprintf("php_%d_%d.csv", $X, $N);

// Create the "outputs" directory if it does not exist
if (!file_exists("outputs")) {
  mkdir("outputs");
}

// Write the probabilities to a file in the "outputs" directory
$file = fopen("../outputs/$fileName", "w");
for ($i = 0; $i < $X; $i++) {
  fwrite($file, sprintf("%d:%f\n", $i, $probabilities[$i]));
}
fclose($file);

