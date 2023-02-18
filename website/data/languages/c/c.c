#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <sys/stat.h>

#define N 10
#define X 100

// Create the "outputs" directory if it does not exist
void create_outputs_directory()
{
    struct stat st = {0};
    if (stat("outputs", &st) == -1)
    {
        mkdir("outputs", 0755);
    }
}

int main()
{
    // Generate N random numbers between 1 and X
    srand(time(NULL));
    int numbers[N];
    for (int i = 0; i < N; i++)
    {
        numbers[i] = rand() % X + 1;
    }

    // Calculate the probability of each number
    int counts[X] = {0};
    for (int i = 0; i < N; i++)
    {
        counts[numbers[i] - 1]++;
    }
    double probabilities[X];
    for (int i = 0; i < X; i++)
    {
        probabilities[i] = (double)counts[i] / N;
    }

    // Generate a file name based on the values of N and X
    char file_name[100];
    sprintf(file_name, "c_%d_%d.csv", N, X);

    // Create the "outputs" directory if it does not exist
    create_outputs_directory();

    // Write the probabilities to a file in the "outputs" directory
    FILE *fp = fopen("outputs/file_name", "w");
    for (int i = 0; i < X; i++)
    {
        fprintf(fp, "%d,%f\n", i + 1, probabilities[
