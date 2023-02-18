#!/bin/bash

# Set the number of random numbers to generate and the upper bound for the numbers
N=10
X=100

# Generate N random numbers between 1 and X
numbers=($(shuf -i 1-$X -n $N))

# Calculate the probability of each number
counts=($(printf "%s\n" "${numbers[@]}" | sort -n | uniq -c | awk '{print $1}'))
total=${#numbers[@]}
probabilities=()
for count in "${counts[@]}"; do
    probabilities+=("$((count / total))")
done

# Generate a file name based on the values of N and X
file_name="bash_$N_$X.csv"

# Create the "outputs" directory if it does not exist
mkdir -p outputs

# Write the probabilities to a file in the "outputs" directory
for ((i = 0; i < $total; i++)); do
    printf "%d,%f\n" "${numbers[$i]}" "${probabilities[$i]}" >> "outputs/$file_name"
done
