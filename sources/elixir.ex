# elixir elixir.ex

defmodule Probability do
  def main do
    n = 1000000000
    x = 10

    # Generate N random numbers between 1 and X
    numbers = for _ <- 1..n, do: :rand.uniform(x)

    # Calculate the probability of each number
    probabilities = Enum.frequencies(numbers) |> Enum.map(fn {number, count} ->
      {number, count / n}
    end)

    # Output probabilities to a file
    file_name = "elixir_#{x}_#{n}"
    File.write(file_name, Enum.map_join(probabilities, "\n", fn {number, probability} ->
      "#{number}:#{probability}"
    end)) 
    IO.puts "Probabilities written to file #{file_name}"
  end
end

Probability.main()
