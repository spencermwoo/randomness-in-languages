package main

import (
    "math/rand"
    "strconv"
    "time"
)

func main() {
    // Set the number of random numbers to generate and the upper bound for the numbers
    n := 10
    x := 100

    // Generate N random numbers between 1 and X
    rand.Seed(time.Now().UnixNano())
    numbers := make([]int, n)
    for i := range numbers {
        numbers[i] = rand.Intn(x) + 1
    }

    // Calculate the probability of each number
    counts := make(map[int]int)
    for _, number := range numbers {
        counts[number]++
    }
    total := len(numbers)
    probabilities := make(map[int]float64)
    for number, count := range counts {
        probabilities[number] = float64(count) / float64(total)
    }

    // Generate a file name based on the values of N and X
    fileName := "go_" + strconv.Itoa(n) + "_" + strconv.Itoa(x) + ".csv"

    // Create the "outputs" directory if it does not exist
    err := os.MkdirAll("outputs", 0755)
    if err != nil {
        panic(err)
    }

    // Write the probabilities to a file in the "outputs" directory
    file, err := os.Create("outputs/" + fileName)
    if err != nil {
        panic(err)
    }
    defer file.Close()

    for number, probability := range probabilities {
        _, err := file.WriteString(strconv.Itoa(number) + "," + strconv.FormatFloat(probability, 'f', -1, 64) + "\n")
        if err != nil {
            panic(err)
        }
    }
}
