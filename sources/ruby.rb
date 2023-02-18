# Set the number of random numbers to generate and the upper bound for the numbers
n = 10
x = 100

# Generate N random numbers between 1 and X
random = Random.new
numbers = n.times.map { random.rand(1..x) }

# Calculate the probability of each number
counts = numbers.each_with_object(Hash.new(0)) { |number, hash| hash[number] += 1 }
total = numbers.count
probabilities = counts.map { |number, count| [number, count.to_f / total] }.to_h

# Generate a file name based on the values of N and X
file_name = "ruby_#{n}_#{x}.csv"

# Create the "outputs" directory if it does not exist
Dir.mkdir("outputs") unless Dir.exists?("outputs")

# Write the probabilities to a file in the "outputs" directory
File.open("outputs/#{file_name}", "w") do |file|
  probabilities.each do |number, probability|
    file.puts "#{number},#{probability}"
  end
end
