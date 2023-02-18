import java.io.File

// Set the number of random numbers to generate and the upper bound for the numbers
val n = 10
val x = 100

// Generate N random numbers between 1 and X
val random = new scala.util.Random()
val numbers = (1 to n).map(_ => random.nextInt(x) + 1)

// Calculate the probability of each number
val counts = numbers.groupBy(identity).mapValues(_.size)
val total = numbers.size
val probabilities = counts.mapValues(_.toDouble / total)

// Generate a file name based on the values of N and X
val fileName = s"scala_$n\_$x.csv"

// Create the "outputs" directory if it does not exist
new File("outputs").mkdirs()

// Write the probabilities to a file in the "outputs" directory
val writer = new java.io.FileWriter(s"outputs/$fileName")
probabilities.foreach { case (number, probability) =>
  writer.write(s"$number,$probability\n")
}
writer.close()
