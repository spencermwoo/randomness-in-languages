# Set the number of random numbers to generate and the upper bound for the numbers
n <- 10
x <- 100

# Generate N random numbers between 1 and X
numbers <- sample(1:x, n, replace = TRUE)

# Calculate the probability of each number
counts <- table(numbers)
total <- length(numbers)
probabilities <- counts / total

# Generate a file name based on the values of N and X
fileName <- paste0("r_", n, "_", x, ".csv")

# Create the "outputs" directory if it does not exist
if (!dir.exists("outputs")) {
    dir.create("outputs")
}

# Write the probabilities to a file in the "outputs" directory
file <- file("outputs/", fileName, open = "w")
writeLines(paste(names(probabilities), probabilities, sep = ","), file)
close(file)
