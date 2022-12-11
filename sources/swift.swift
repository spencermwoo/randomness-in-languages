import Foundation

// Set the number of random numbers to generate and the upper bound for the numbers
let n = 10
let x = 100

// Generate N random numbers between 1 and X
let random = SystemRandomNumberGenerator()
let numbers = (0..<n).map { _ in random.next() % x + 1 }

// Calculate the probability of each number
let counts = Dictionary(numbers.map { ($0, 1) }, uniquingKeysWith: +)
let total = numbers.count
let probabilities = counts.mapValues { $0 / Double(total) }

// Generate a file name based on the values of N and X
let fileName = "swift_\(n)_\(x).csv"

// Create the "outputs" directory if it does not exist
try! FileManager.default.createDirectory(atPath: "outputs", withIntermediateDirectories: true)

// Write the probabilities to a file in the "outputs" directory
let output = probabilities.map { "\($0.key),\($0.value)" }.joined(separator: "\n")
try! output.write(toFile: "outputs/\(fileName)", atomically: true, encoding: .utf8)
