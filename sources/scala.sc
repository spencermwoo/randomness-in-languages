import scala.util.Random
import java.io.PrintWriter

val N = 1000000
val X = 1000

// Generate N random numbers between 1 and X
val numbers = List.fill(N)(Random.nextInt(X) + 1)

// Calculate the probability of each number
val probabilities = numbers.groupBy(identity).mapValues(_.size.toDouble / N)

// Output probabilities to a file
val fileName = "scala_" + X + "_" + N
val writer = new PrintWriter(fileName)
probabilities.foreach { case (number, probability) =>
  writer.write(number + ":" + probability + "\n")
}
writer.close()
println("Probabilities written to file " + fileName)
