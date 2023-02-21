#!/bin/bash

N=1000000
X=10
BATCH_SIZE=10000
OUTPUT_FILE="batch_bash${X}_${N}"

# Generate N random numbers between 1 and X
nums=()
while (( ${#nums[@]} <= N )); do
  batch=()
  for ((i=0; i<BATCH_SIZE; i++)); do
    batch+=($RANDOM)
  done
  for ((i=0; i<BATCH_SIZE; i++)); do
    num=$((1 + (batch[i] * X) / 32767))
    nums+=($num)
  done
done

# Write output to file
echo "${nums[@]}" > "$OUTPUT_FILE"
