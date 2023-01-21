# Set the number of random numbers to generate and the upper bound for the numbers
$n = 10
$x = 100

# Generate N random numbers between 1 and X
$random = New-Object System.Random
$numbers = 1..$n | ForEach-Object { $random.Next(1, $x + 1) }

# Calculate the probability of each number
$counts = $numbers | Group-Object | ForEach-Object { $_.Count }
$total = $numbers.Count
$probabilities = $counts / $total

# Generate a file name based on the values of N and X
$fileName = "powershell_$n`_$x.csv"

# Create the "outputs" directory if it does not exist
if (!(Test-Path -Path "outputs")) {
    New-Item -ItemType Directory -Path "outputs"
}

# Write the probabilities to a file in the "outputs" directory
$output = $probabilities | ForEach-Object { "$_,$($probabilities[$_])" }
Set-Content -Path "outputs/$fileName" -Value $output
