#!/bin/bash

# better optimization is generate numbers of full set and split on digits, but that defeats the purpose of the trials
# PRNG on small num value range

N=1000000
X=1000
OUTPUT_FILE="bash_${X}_${N}"

counts=()

for ((i=0; i<N; i++)); do
  r=$(( $RANDOM % X ));
  (( counts[r]++ ))
done

echo "${counts[@]}" > "$OUTPUT_FILE"