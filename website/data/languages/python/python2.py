# Import the `random` and `csv` modules, and the `os` module for working with directories
import random
import csv
import os

# Set the number of random numbers to generate and the upper bound for the numbers
N = 10
X = 100

# Generate N random numbers between 1 and X
numbers = [random.randint(1, X) for _ in range(N)]

# Calculate the probability of each number
total = len(numbers)
probabilities = [numbers.count(x) / total for x in numbers]

# Generate a file name based on the values of N and X
file_name = f"python_{N}_{X}.csv"

# Create the "outputs" directory if it does not exist
if not os.path.exists("outputs"):
    os.makedirs("outputs")

# Write the probabilities to a file in the "outputs" directory
with open(os.path.join("outputs", file_name), "w") as f:
    writer = csv.writer(f)
    writer.writerows(zip(numbers, probabilities))
