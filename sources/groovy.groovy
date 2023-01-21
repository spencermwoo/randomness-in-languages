// Set the number of random numbers to generate and the upper bound for the numbers
def N = 10
def X = 100

// Generate N random numbers between 1 and X
def generateNumbers() {
    // Initialize the random number generator with a seed based on the current time
    Random random = new Random(System.currentTimeMillis())

    // Generate the random numbers and store them in the array
    (1..N).collect { random.nextInt(X) + 1 }
}

// Calculate the probability of each number
def calculateProbabilities(numbers) {
    // Calculate the probability of each number
    (1..X).collect {
        numbers.count { it == X } / N
    }
}

// Generate a file name based on the values of N and X
def generateFileName() {
    "groovy${N}${X}.csv"
}

// Create the "outputs" directory if it does not exist
def createOutputDirectory() {
    new File('outputs').mkdirs()
}

// Write the probabilities to a file in the "outputs" directory
def writeProbabilities(probabilities) {
    new File('outputs/' + generateFileName()).withWriter { writer ->
        probabilities.eachWithIndex { probability, i ->
            writer.writeLine("${i + 1},${probability}")
        }
    }
}

// Generate the numbers and calculate the probabilities
def numbers = generateNumbers()
def probabilities = calculateProbabilities(numbers)

// Create the output directory and write the probabilities to a file
createOutputDirectory()
writeProbabilities(probabilities)
