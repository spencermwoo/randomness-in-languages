#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// Set the number of random numbers to generate and the upper bound for the numbers
#define N 10
#define X 100

// Generate N random numbers between 1 and X
int* generateNumbers() {
    // Initialize the random number generator with a seed based on the current time
    srand(time(NULL));

    // Allocate memory for the array of numbers
    int* numbers = (int*)malloc(N * sizeof(int));

    // Generate the random numbers and store them in the array
    for (int i = 0; i < N; i++) {
        numbers[i] = rand() % X + 1;
    }

    return numbers;
}

// Calculate the probability of each number
int* calculateProbabilities(int* numbers) {
    // Allocate memory for the array of probabilities
    int* probabilities = (int*)calloc(X, sizeof(int));

    // Calculate the probability of each number
    for (int i = 0; i < N; i++) {
        probabilities[numbers[i] - 1]++;
    }

    return probabilities;
}

int main() {
    // Generate the random numbers
    int* numbers = generateNumbers();

    // Calculate the probabilities
    int* probabilities = calculateProbabilities(numbers);

    // Generate a file name based on the values of N and X
    char fileName[100];
    sprintf(fileName, "c_%d_%d.csv", N, X);

    // Write the probabilities to a file in the "outputs" directory
    FILE* file = fopen("outputs/", fileName);
    for (int i = 0; i < X; i++) {
        fprintf(file, "%d,%d\n", i + 1, probabilities[i]);
    }
    fclose(file);

    // Free the memory used by the arrays of numbers and probabilities
    free(numbers);
   
