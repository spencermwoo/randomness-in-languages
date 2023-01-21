# Set the number of random numbers to generate and the upper bound for the numbers
n = 10
x = 100

# Generate N random numbers between 1 and X
def generate_numbers, do: Enum.map(1..n, fn -> :random.uniform(x) end)

# Calculate the probability of each number
def calculate_probabilities(numbers) do
    Enum.map(1..x, fn i ->
        Enum.count(numbers, i) / n
    end)
end

# Generate a file name based on the values of N and X
def generate_file_name, do: "elixir#{n}#{x}.csv"

# Create the "outputs" directory if it does not exist
def create_output_directory, do: File.mkdir_p("outputs")

# Write the probabilities to a file in the "outputs" directory
def write_probabilities(probabilities) do
    File.write!("outputs/#{generate_file_name}",
        Enum.map(probabilities, fn probability, i ->
            "#{i},#{probability}"
        end)
    )
end

# Generate the numbers and calculate the probabilities
numbers = generate_numbers
probabilities = calculate_probabilities(numbers)

# Create the output directory and write the probabilities to a file
create_output_directory
write_probabilities(probabilities)
