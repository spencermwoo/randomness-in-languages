#include <algorithm>
#include <fstream>
#include <iostream>
#include <map>
#include <random>
#include <string>
#include <vector>

const int N = 1000000;
const int X = 1000;

// g++ -std=c++17 cplus.cc -o cc

// Generate N random numbers between 1 and X
std::vector<int> generate_random_numbers()
{
    std::random_device rd;
    std::mt19937 mt(rd());
    std::uniform_int_distribution<int> dist(1, X);

    std::vector<int> numbers;
    for (int i = 0; i < N; i++)
    {
        numbers.push_back(dist(mt));
    }

    return numbers;
}

// Calculate the probability of each number
std::map<int, double> calculate_probabilities(const std::vector<int> &numbers)
{
    std::map<int, int> counts;
    for (auto number : numbers)
    {
        counts[number]++;
    }

    std::map<int, double> probabilities;
    for (const auto &kvp : counts)
    {
        probabilities[kvp.first] = (double)kvp.second / N;
    }

    return probabilities;
}

// Generate a file name based on the values of N and X
std::string generate_file_name()
{
    return "cplus_" + std::to_string(X) + "_" + std::to_string(N);
}

int main()
{
    // Generate the random numbers and calculate their probabilities
    auto numbers = generate_random_numbers();
    auto probabilities = calculate_probabilities(numbers);

    // Generate a file name and create the "outputs" directory if it does not exist
    auto file_name = generate_file_name();
    // std::filesystem::create_directories("outputs");

    // Write the probabilities to a file in the "outputs" directory
    std::ofstream file("../outputs/" + file_name);
    for (const auto &kvp : probabilities)
    {
        file << kvp.first << ":" << kvp.second << "\n";
    }

    return 0;
}
