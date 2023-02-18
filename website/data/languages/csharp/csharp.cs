using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace RandomNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            // Set the number of random numbers to generate and the upper bound for the numbers
            var n = 10;
            var x = 100;

            // Generate N random numbers between 1 and X
            var random = new Random();
            var numbers = Enumerable.Range(0, n).Select(_ => random.Next(1, x + 1)).ToList();

            // Calculate the probability of each number
            var counts = numbers.GroupBy(number => number).ToDictionary(group => group.Key, group => group.Count());
            var total = numbers.Count;
            var probabilities = counts.ToDictionary(kvp => kvp.Key, kvp => kvp.Value / (double)total);

            // Generate a file name based on the values of N and X
            var fileName = $"csharp_{n}_{x}.csv";

            // Create the "outputs" directory if it does not exist
            Directory.CreateDirectory("outputs");

            // Write the probabilities to a file in the "outputs" directory
            using (var writer = new StreamWriter($"outputs/{fileName}"))
            {
                foreach (var (number, probability) in numbers.Zip(probabilities.Values, (number, probability) => (number, probability)))
                {
                    writer.WriteLine($"{number},{probability}");
                }
            }
        }
    }
}
