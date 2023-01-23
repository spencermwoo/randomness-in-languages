import java.io.File
import java.io.FileWriter
import java.util.Random

// Set the number of random numbers to generate and the upper bound for the numbers
val n = 10
val x = 100

// Generate N random numbers between 1 and X
val random = Random()
val numbers = (1..n).map { random.nextInt(x) + 1 }

// Calculate the probability of each number
val counts = numbers.groupingBy { it }.eachCount()
val total = numbers.size
val probabilities = counts.mapValues { it.value.toDouble() / total }

// Generate a file name based on the values of N and X
val fileName = "kotlin_$n\_$x.csv"

// Create the "outputs" directory if it does not exist
val dir = File("outputs")
if (!dir.exists()) dir.mkdir()

// Write the probabilities to a file in the "outputs" directory
FileWriter("outputs/$fileName").use { writer ->
  probabilities.forEach { (number, probability) ->
    writer.write("$number,$probability\n")
  }
}
