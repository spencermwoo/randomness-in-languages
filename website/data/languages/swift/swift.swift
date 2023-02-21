import Foundation

let N = 1000000
let X = 1000

// Generate N random numbers between 1 and X
var numbers = [Int]()
for _ in 0..<N {
    let number = Int.random(in: 1...X)
    numbers.append(number)
}

// Calculate the probability of each number
var probabilities = [Int: Double]()
for number in numbers {
    if let count = probabilities[number] {
        probabilities[number] = count + 1.0/Double(N)
    } else {
        probabilities[number] = 1.0/Double(N)
    }
}

// Output probabilities to a file
let fileName = "swift_\(X)_\(N).txt"
let filePath = FileManager.default.currentDirectoryPath + "/" + fileName
let fileURL = URL(fileURLWithPath: filePath)
var output = ""
for number in probabilities.keys.sorted() {
    output += "\(number): \(probabilities[number]!)\n"
}
do {
    try output.write(to: fileURL, atomically: true, encoding: .utf8)
    print("Probabilities written to file \(fileName)")
} catch {
    print("Error writing to file: \(error)")
}
