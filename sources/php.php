<?php

// Set the number of random numbers to generate and the upper bound for the numbers
$N = 10;
$X = 100;

// Generate N random numbers between 1 and X
$numbers = [];
for ($i = 0; $i < $N; $i++) {
  $numbers[] = rand(1, $X);
}

// Calculate the probability of each number
$total = count($numbers);
$probabilities = [];
foreach ($numbers as $number) {
  $count = 0;
  foreach ($numbers as $n) {
    if ($n == $number) {
      $count++;
    }
  }
  $probabilities[] = $count / $total;
}

// Generate a file name based on the values of N and X
$fileName = sprintf("php_%d_%d.csv", $N, $X);

// Create the "outputs" directory if it does not exist
if (!file_exists("outputs")) {
  mkdir("outputs");
}

// Write the probabilities to a file in the "outputs" directory
$file = fopen("outputs/$fileName", "w");
for ($i = 0; $i < $N; $i++) {
  fwrite($file, sprintf("%d,%f\n", $numbers[$i], $probabilities[$i]));
}
fclose($file);

