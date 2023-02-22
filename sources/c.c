#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// gcc -Wall c2.c
int main() {
    int N, X;
    printf("Enter the number of random numbers (N): ");
    scanf("%d", &N);
    printf("Enter the maximum value (X): ");
    scanf("%d", &X);
    
    int numbers[X+1];
    double probabilities[X+1];
    
    // Initialize the arrays
    for (int i=1; i<=X; i++) {
        numbers[i] = 0;
        probabilities[i] = 0.0;
    }
    
    // Generate N random numbers between 0 and X-1
    srand(time(NULL));
    for (int i=0; i<N; i++) {
        int r = rand() % X + 1;
        numbers[r]++;
    }
    
    // Calculate the probability of each number
    for (int i=0; i<=X; i++) {
        probabilities[i] = (double)numbers[i] / N;
    }
    
    // Output the probabilities to a file
    char filename[100];
    sprintf(filename, "c_%d_%d", X, N);
    FILE* fp = fopen(filename, "w");
    if (fp == NULL) {
        printf("Error opening file.\n");
        return 1;
    }
    
    for (int i=1; i<=X; i++) {
        fprintf(fp, "%d: %.6f\n", i, probabilities[i]);
    }
    
    fclose(fp);
    printf("Probabilities written to file %s.\n", filename);
    
    return 0;
}

